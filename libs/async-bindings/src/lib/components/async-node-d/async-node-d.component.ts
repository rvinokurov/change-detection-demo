import {
  ChangeDetectionStrategy,
  Component, Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";

@Component({
  selector: 'async-node-d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-node-d.component.html',
  styleUrls: ['./async-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncNodeDComponent extends AbsctractComponentNode {
  nodeColor = '#e3a888';
  title = 'D';

  @Input() value = 0;
}
