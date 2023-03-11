import {
  ChangeDetectionStrategy,
  Component, Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";

@Component({
  selector: 'async-node-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-node-c.component.html',
  styleUrls: ['./async-node-c.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncNodeCComponent extends AbsctractComponentNode {
  nodeColor = '#e388d7';
  title = 'C';

  @Input() value = 0;
}
