import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeEComponent } from '../onpush-node-e/onpush-node-e.component';
import { AbsctractComponentNode } from '../../../../absctract-component-node';

@Component({
  selector: 'onpush-node-c',
  standalone: true,
  imports: [CommonModule, OnpushNodeEComponent],
  templateUrl: './onpush-node-c.component.html',
  styleUrls: ['./onpush-node-c.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeCComponent extends AbsctractComponentNode {
  title = 'C';

  counter = 0;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly ngZone: NgZone
  ) {
    super();
  }

  click($event: MouseEvent) {
    $event.stopPropagation();
    console.log(`click ${this.title}`);
  }

  runCounter() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  runCounterWithMarkForCheck() {
    setInterval(() => {
      this.counter++;
      this.cdr.markForCheck();
    }, 1000);
  }

  runCounterWithMarkForCheckOutSideZone() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter++;
        this.cdr.markForCheck();
      }, 1000);
    });
  }

  runCounterWithDetectChangesOutSideZone() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter++;
        this.cdr.detectChanges();
      }, 1000);
    });
  }
}
