import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeEComponent } from '../onpush-node-e/onpush-node-e.component';
import { AbsctractComponentNode } from '../../../../absctract-component-node';
import { SourceCodeComponent } from '../../../../components/source-code/source-code.component';
import { OnpushNodeJComponent } from '../onpush-node-j/onpush-node-j.component';

@Component({
  selector: 'onpush-node-c',
  standalone: true,
  imports: [
    CommonModule,
    OnpushNodeEComponent,
    SourceCodeComponent,
    OnpushNodeJComponent,
  ],
  templateUrl: './onpush-node-c.component.html',
  styleUrls: ['./onpush-node-c.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeCComponent
  extends AbsctractComponentNode
  implements AfterViewInit
{
  title = 'C';

  nodeColor = '#eaeaa0';

  counter = 0;

  @ViewChild('runOutsideZone') runOutsideZone: ElementRef<HTMLElement> | null = null;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly ngZone: NgZone
  ) {
    super();
  }

  click($event: MouseEvent) {
    $event.stopPropagation();
    this.log(`click ${this.title}`);
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

  runCounterWithDetectChangesOutSideZone($event: MouseEvent) {
    $event.stopPropagation();
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter++;
        this.cdr.detectChanges();
      }, 1000);
    });
  }

  ngAfterViewInit() {
    this.runOutsideZone?.nativeElement.addEventListener('click', (event) => {
      this.runCounterWithDetectChangesOutSideZone(event);
    });
  }
}
