import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeChannelName, customCounterIncreament } from '../counter.actions';
import { CounterState } from '../Counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName!: string;
  count$!: Observable<{ channelName: string }>;
  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = store.select('count');
  }
  ngOnInit(): void {
    this.count$.subscribe((data) => {
      console.log('ChannelName in customer-input-component also called');
      this.channelName = data.channelName;
    });
  }
  addCount() {
    this.store.dispatch(customCounterIncreament({ value: this.value }));
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
