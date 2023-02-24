import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeCComponent } from '../onpush-node-c/onpush-node-c.component';
import { OnpushNodeFComponent } from '../onpush-node-f/onpush-node-f.component';
import {AbsctractComponentNode} from "../../../../absctract-component-node";

@Component({
  selector: 'onpush-node-b',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent, OnpushNodeFComponent],
  templateUrl: './onpush-node-b.component.html',
  styleUrls: ['./onpush-node-b.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeBComponent extends AbsctractComponentNode {
  title = 'B';

  nodeColor = '#a1a1de';
}
