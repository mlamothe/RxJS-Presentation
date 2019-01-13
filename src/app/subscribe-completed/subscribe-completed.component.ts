import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-subscribe-completed',
  templateUrl: './subscribe-completed.component.html',
  styleUrls: ['./subscribe-completed.component.scss']
})
export class SubscribeCompletedComponent {

  timerValue = 0;
  errorValue: any;
  isComplete: boolean;

  runTimer() {
    this.isComplete = false;

    timer(0, 250).pipe(take(6)).subscribe(
      // Next
      timerValue => this.timerValue = timerValue,
      // Error
      error => this.errorValue = error,
      // Completed
      () => this.isComplete = true);
  }
}
