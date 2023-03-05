import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  changeChannelName,
  customCounterIncreament,
} from '../../actions/counter.actions';
import { getChannelName } from '../../state/counter.selectors';
import { CounterState } from '../../state/Counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName!: string;
  count$!: Observable<{ channelName: string }>;
  constructor(private store: Store<{ count: CounterState }>) {
    //111
    // this.count$ = store.select('count');
  }
  ngOnInit(): void {
    //111
    /*
    this.count$.subscribe((data) => {
      console.log('ChannelName in customer-input-component also called');
      this.channelName = data.channelName;
    });
    */

    this.store.select(getChannelName).subscribe((data) => {
      console.log('ChannelName in customer-input-component also called');
      this.channelName = data;
    });
  }
  addCount() {
    this.store.dispatch(customCounterIncreament({ value: this.value }));
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
