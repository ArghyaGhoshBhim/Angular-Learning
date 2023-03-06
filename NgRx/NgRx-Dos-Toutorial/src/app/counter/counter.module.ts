import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { CounterComponent } from './counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { ViewCountComponent } from './view-count/view-count.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    ViewCountComponent,
    CustomCounterInputComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class CounterModule {}
