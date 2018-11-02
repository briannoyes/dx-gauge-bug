import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @Input() forecast = 250000;
  @Input() plan = 240000;
  @Input() isCurrency: boolean;
  @Input() threshold = 0.1;
  @Input() hasData = true;
  @Input() greaterIsGood = true;
  @Input() planLabel: string;
  @Input() forecastLabel: string;
  @Input() minVal: number;
  @Input() maxVal: number;

  constructor() { }

  ngOnInit() { }

  get startValue() {
    if (!this.hasData) { return 0; }
    if (this.minVal || this.minVal === 0) { return this.minVal; }
    const half = Math.abs(this.plan / 2);
    const delta = Math.abs(this.plan - this.forecast);
    if (!half && !delta) { return 0; }
    else { return delta > half ? this.plan - delta : this.plan - half; }
  }

  get endValue() {
    if (!this.hasData) { return 6; }
    if (this.maxVal || this.maxVal === 0) { return this.maxVal; }
    const half = Math.abs(this.plan / 2);
    const delta = Math.abs(this.plan - this.forecast);
    if (!half && !delta) { return 1; }
    return delta > half ? this.plan + delta : this.plan + half;
  }

  get planThreshold() {
    if (this.greaterIsGood) {
      return this.plan * (1 - this.threshold);
    }
    else {
      return this.plan * (1 + this.threshold);
    }
  }

  get planAmountDisplay() {
    return this.plan;
  }

  get forecastAmountDisplay() {
    return this.forecast;
  }

  get tickInterval() {
    return Math.abs(this.startValue - this.endValue) / 6;
  }
}
