import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  run() {
    var subject = new Subject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(1);
    subject.next(2);
  }
}
