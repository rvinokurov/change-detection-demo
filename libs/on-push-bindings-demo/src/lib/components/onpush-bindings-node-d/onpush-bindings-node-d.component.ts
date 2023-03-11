import {ChangeDetectionStrategy, Component, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnpushBindingsNodeCComponent} from "../onpush-bindings-node-c/onpush-bindings-node-c.component";
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";

@Component({
  selector: 'onpush-bindings-node-d',
  standalone: true,
  imports: [CommonModule, OnpushBindingsNodeCComponent],
  templateUrl: './onpush-bindings-node-d.component.html',
  styleUrls: ['./onpush-bindings-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushBindingsNodeDComponent extends AbsctractComponentNode {
  nodeColor = '#ffd7d7';
  title = 'D';

}
