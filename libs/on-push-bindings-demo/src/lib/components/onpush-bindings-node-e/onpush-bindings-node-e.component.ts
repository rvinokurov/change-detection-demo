import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnpushBindingsNodeCComponent} from "../onpush-bindings-node-c/onpush-bindings-node-c.component";
import {AbsctractComponentNode, SourceCodeComponent} from "@change-detection-demo/shared/core";

@Component({
  selector: 'onpush-bindings-node-e',
  standalone: true,
  imports: [CommonModule, OnpushBindingsNodeCComponent, SourceCodeComponent],
  templateUrl: './onpush-bindings-node-e.component.html',
  styleUrls: ['./onpush-bindings-node-e.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushBindingsNodeEComponent extends AbsctractComponentNode {
  nodeColor = '#b4affc';
  title = 'E';

  private wrappedCounter = -1;

  @Input()
  set counter(counter: number) {
    this.log('set counter');
    this.wrappedCounter = counter;
  }

  get counter() {
    this.log('render counter')
    return this.wrappedCounter;
  }
}
