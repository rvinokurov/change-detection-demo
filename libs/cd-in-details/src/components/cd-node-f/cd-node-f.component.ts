import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '@change-detection-demo/shared/core';

@Component({
  selector: 'cd-node-f',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cd-node-f.component.html',
  styleUrls: ['./cd-node-f.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdNodeFComponent extends AbsctractComponentNode {
  nodeColor = '#f6b4b4';
  title = 'F';
}
