import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeCComponent } from '../onpush-node-c/onpush-node-c.component';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";

@Component({
  selector: 'onpush-node-f',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent],
  templateUrl: './onpush-node-f.component.html',
  styleUrls: ['./onpush-node-f.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeFComponent extends AbsctractComponentNode {
  title = 'F';

  nodeColor = 'deepskyblue';
}
