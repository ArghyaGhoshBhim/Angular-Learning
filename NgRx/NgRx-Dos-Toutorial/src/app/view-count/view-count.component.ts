import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-count',
  templateUrl: './view-count.component.html',
})
export class ViewCountComponent {
  count$: Observable<number> | undefined;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
