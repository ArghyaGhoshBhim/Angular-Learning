import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { countReducer } from './counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { ViewCountComponent } from './view-count/view-count.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, ViewCountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: countReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
