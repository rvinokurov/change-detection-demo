import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";
import {CdNodeBComponent} from "../cd-node-b/cd-node-b.component";
import {CdNodeFComponent} from "../cd-node-f/cd-node-f.component";

@Component({
  selector: 'cd-node-a',
  standalone: true,
  imports: [CommonModule, CdNodeBComponent, CdNodeFComponent],
  templateUrl: './cd-node-a.component.html',
  styleUrls: ['./cd-node-a.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdNodeAComponent extends AbsctractComponentNode {
  nodeColor = '#9ce388';
  title = 'A';


}
