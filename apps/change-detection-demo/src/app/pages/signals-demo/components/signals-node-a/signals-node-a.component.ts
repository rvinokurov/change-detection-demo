import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbsctractComponentNode} from '../../../../absctract-component-node';
import {SignalContainerComponent} from '../signal-container/signal-container.component';
import {computed, signal} from '@demo/angular-next';
import {SignalsNodeBComponent} from '../signals-node-b/signals-node-b.component';
import {SignalsNodeCComponent} from "../signals-node-c/signals-node-c.component";

@Component({
  selector: 'signals-node-a',
  standalone: true,
  imports: [CommonModule, SignalContainerComponent, SignalsNodeBComponent, SignalsNodeCComponent],
  templateUrl: './signals-node-a.component.html',
  styleUrls: ['./signals-node-a.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsNodeAComponent
  extends AbsctractComponentNode
  implements AfterViewInit
{
  nodeColor = '#b3efd0';
  title = 'A';

  a = signal(0);
  b = signal(0);
  c = signal(0);
  d = computed(() => this.a() + this.b());

  @ViewChild('aButton') aButton?: ElementRef<HTMLElement>;
  @ViewChild('bButton') bButton?: ElementRef<HTMLElement>;
  @ViewChild('cButton') cButton?: ElementRef<HTMLElement>;

  constructor(
    private readonly ngZone: NgZone,
  ) {
    super();
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.aButton?.nativeElement.addEventListener('click', this.clickA);
      this.bButton?.nativeElement.addEventListener('click', this.clickB);
      this.cButton?.nativeElement.addEventListener('click', this.clickC);
    });

  }

  clickA = () => {
    this.a.set(this.a() + 1);
  };

  clickB = () => {
    this.b.set(this.b() + 1);
  };
  clickC = () => {
    this.c.set(this.c() + 1);
  };
}
