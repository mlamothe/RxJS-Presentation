import { Component } from '@angular/core';
import { merge, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-error-demo',
  templateUrl: './error-demo.component.html',
  styleUrls: ['./error-demo.component.scss']
})
export class ErrorDemoComponent {

  timerValue = 0;
  errorValue: any;
  isComplete: boolean;
  errorObs = new Subject<any>();

  runTimer() {
    this.isComplete = false;

    merge(
      timer(0, 250), this.errorObs)
      .subscribe(
        // Next
        timerValue => this.timerValue = timerValue,
        // Error
        error => this.errorValue = error,
        // Completed
        () => this.isComplete = true);
  }

  throwError() {
    this.errorObs.error('This is only a test...');
  }
}
