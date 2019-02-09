import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent {

  run() {
    var subject = new BehaviorSubject(42);

    subject.subscribe({
      next: (v) => console.log('observer A: ' + v)
    });

    subject.subscribe({
      next: (v) => console.log('observer B: ' + v)
    });

    console.log('Emit 1');
    subject.next(1);

    console.log('Emit 2');
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log('observer C: ' + v)
    });

    console.log('Emit 3');
    subject.next(3);
  }
}
