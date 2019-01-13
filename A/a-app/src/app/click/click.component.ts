import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements AfterContentInit, OnDestroy {
  @ViewChild(MatButton, { read: ElementRef }) button: ElementRef;

  sub: Subscription;

  ngAfterContentInit(): void {
    this.sub = fromEvent(this.button.nativeElement, 'click')
      .subscribe(ev => console.log(ev));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
