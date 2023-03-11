import {
  ChangeDetectionStrategy,
  Component, Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";

@Component({
  selector: 'async-node-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-node-b.component.html',
  styleUrls: ['./async-node-b.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncNodeBComponent extends AbsctractComponentNode {
  nodeColor = '#88d2e3';
  title = 'B';

  @Input() value = 0;
}
