import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '../../../../absctract-component-node';
import { OnpushBindingsNodeCComponent } from '../onpush-bindings-node-c/onpush-bindings-node-c.component';
import { OnpushBindingsNodeEComponent } from '../onpush-bindings-node-e/onpush-bindings-node-e.component';
import { OnpushBindingsNodeDComponent } from '../onpush-bindings-node-d/onpush-bindings-node-d.component';
import { SourceCodeComponent } from '../../../../components/source-code/source-code.component';

@Component({
  selector: 'onpush-bindings-node-b',
  standalone: true,
  imports: [
    CommonModule,
    OnpushBindingsNodeCComponent,
    OnpushBindingsNodeEComponent,
    OnpushBindingsNodeDComponent,
    SourceCodeComponent,
  ],
  templateUrl: './onpush-bindings-node-b.component.html',
  styleUrls: ['./onpush-bindings-node-b.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushBindingsNodeBComponent extends AbsctractComponentNode {
  nodeColor = '#b0cfff';
  title = 'B';

  counter = 0;

  @Output() counterChange = new EventEmitter();

  updateCounter(counter: number) {
    this.counter = counter;
    this.log('emit counter');
    this.counterChange.emit(counter);
  }
}
