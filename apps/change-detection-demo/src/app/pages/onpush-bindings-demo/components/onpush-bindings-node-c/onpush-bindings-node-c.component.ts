import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '../../../../absctract-component-node';

@Component({
  selector: 'onpush-bindings-node-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush-bindings-node-c.component.html',
  styleUrls: ['./onpush-bindings-node-c.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushBindingsNodeCComponent extends AbsctractComponentNode {
  nodeColor = '#fcf3d1';
  title = 'C';
  wrappedCounter = 0;

  @Output() counterChange = new EventEmitter();

  get counter() {
    this.log('render counter');
    return this.wrappedCounter;
  }

  click() {
    this.log('emit counter');
    this.counterChange.emit(++this.wrappedCounter);
  }
}
