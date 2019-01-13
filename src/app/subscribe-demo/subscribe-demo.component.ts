import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-subscribe-demo',
  templateUrl: './subscribe-demo.component.html',
  styleUrls: ['./subscribe-demo.component.scss']
})
export class SubscribeDemoComponent {

  started = false;

  private timer$: Subscription;
  timerValue = 0;

  runTimer() {
    if (!this.started) {
      this.timer$ = timer(0, 250).subscribe(timerValue => this.timerValue = timerValue);
    } else {
      this.timer$.unsubscribe();
      this.timerValue = 0;
    }

    this.started = !this.started;
  }
}
