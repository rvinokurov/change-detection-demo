import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '@change-detection-demo/shared/core';

@Component({
  selector: 'cd-node-d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cd-node-d.component.html',
  styleUrls: ['./cd-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdNodeDComponent extends AbsctractComponentNode {
  nodeColor = '#f1d8b2';
  title = 'D';
}
