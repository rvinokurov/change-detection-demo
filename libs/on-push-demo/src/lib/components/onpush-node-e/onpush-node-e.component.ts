import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeCComponent } from '../onpush-node-c/onpush-node-c.component';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";

@Component({
  selector: 'onpush-node-e',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent],
  templateUrl: './onpush-node-e.component.html',
  styleUrls: ['./onpush-node-e.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeEComponent extends AbsctractComponentNode {
  title = 'E';

  nodeColor = '#fdb7c4';

  @Input() counter = 0;
}
