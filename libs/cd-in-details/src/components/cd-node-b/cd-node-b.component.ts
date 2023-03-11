import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";
import {CdNodeCComponent} from "../cd-node-c/cd-node-c.component";

@Component({
  selector: 'cd-node-b',
  standalone: true,
  imports: [CommonModule, CdNodeCComponent],
  templateUrl: './cd-node-b.component.html',
  styleUrls: ['./cd-node-b.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdNodeBComponent extends AbsctractComponentNode {
  nodeColor = '#a0d7ea';
  title = 'B';


}
