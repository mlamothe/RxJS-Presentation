import { Component, OnInit } from '@angular/core';
import { Observable, timer, of, empty } from 'rxjs';

@Component({
  selector: 'app-factory-demo',
  templateUrl: './factory-demo.component.html',
  styleUrls: ['./factory-demo.component.scss']
})
export class FactoryDemoComponent {

  started = false;
  clickCount = 0;

  timerObs: Observable<number>;
  ofObs: Observable<number>;

  runTimer() {
    if (!this.started) {
      this.timerObs = timer(0, 250);
    } else {
      this.timerObs = null;
    }
    this.started = !this.started;
  }

  runOf() {
    this.ofObs = of(this.clickCount++);
  }
}
