import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxCircularGaugeModule } from 'devextreme-angular/ui/circular-gauge';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxCircularGaugeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
