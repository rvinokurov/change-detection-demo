import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '../../../../absctract-component-node';
import { OnpushBindingsNodeBComponent } from '../onpush-bindings-node-b/onpush-bindings-node-b.component';
import { OnpushBindingsNodeFComponent } from '../onpush-bindings-node-f/onpush-bindings-node-f.component';
import { BehaviorSubject, delay } from 'rxjs';

@Component({
  selector: 'onpush-bindings-node-a',
  standalone: true,
  imports: [
    CommonModule,
    OnpushBindingsNodeBComponent,
    OnpushBindingsNodeFComponent,
  ],
  templateUrl: './onpush-bindings-node-a.component.html',
  styleUrls: ['./onpush-bindings-node-a.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushBindingsNodeAComponent extends AbsctractComponentNode {
  nodeColor = '#ceffc3';
  title = 'A';
  private wrappedCounter = 0;

  private counter$ = new BehaviorSubject(0);

  delayedCounter$ = this.counter$.pipe(delay(3000));

  get counter() {
    this.log('render counter');
    return this.wrappedCounter;
  }

  updateCounter(counter: number) {
    this.log('set counter');
    this.wrappedCounter = counter;
    this.counter$.next(counter);
  }

  processAsyncCounter(counter: number | null) {
    const resultedCounter = counter === null ? 0 : counter;
    this.log(`return async counter to binding: ${resultedCounter}`);
    return resultedCounter;
  }
}
