import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '../absctract-component-node';
import { OnpushNodeEComponent } from '../onpush-node-e/onpush-node-e.component';

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

  secondCounter = 0;

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

  runSecondCounter() {
    setInterval(() => {
      this.secondCounter++;
    }, 1000);
  }

  runSecondCounterWithMarkForCheck() {
    setInterval(() => {
      this.secondCounter++;
      this.cdr.markForCheck();
    }, 1000);
  }

  runSecondCounterWithMarkForCheckOutSideZone() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.secondCounter++;
        this.cdr.markForCheck();
      }, 1000);
    })
  }

  runSecondCounterWithDetectChangesOutSideZone() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.secondCounter++;
        this.cdr.detectChanges();
      }, 1000);
    })
  }
}
