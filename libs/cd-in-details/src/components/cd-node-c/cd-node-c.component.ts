import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";
import {CdNodeDComponent} from "../cd-node-d/cd-node-d.component";

@Component({
  selector: 'cd-node-c',
  standalone: true,
  imports: [CommonModule, CdNodeDComponent],
  templateUrl: './cd-node-c.component.html',
  styleUrls: ['./cd-node-c.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdNodeCComponent extends AbsctractComponentNode {
  nodeColor = '#d4b2f1';
  title = 'C';

  click() {
    this.log('button clicked');
  }

  someChange() {
    this.log('catch some change');
  }
}
