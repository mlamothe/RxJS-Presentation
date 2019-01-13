import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, filter, skip, tap } from 'rxjs/operators';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss']
})
export class MapFilterComponent {

  started = false;
  clickCount = 0;

  timerObs: Observable<number>;
  ofObs: Observable<number>;

  runTimer() {
    if (!this.started) {
      this.timerObs = timer(0, 250).pipe(
        tap(n => console.log(n)),
        // Skip a few, discard odd values and multiply even values by 10.
        skip(5), // See also skipUntil and takeUntil
        filter(n => n % 2 === 0),
        map(n => n * 10)
      );
    } else {
      this.timerObs = null;
    }
    this.started = !this.started;
  }
}
