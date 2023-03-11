import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeCComponent } from '../onpush-node-c/onpush-node-c.component';
import {OnpushNodeGComponent} from "../onpush-node-g/onpush-node-g.component";
import {AbsctractComponentNode, SourceCodeComponent} from "@change-detection-demo/shared/core";

@Component({
  selector: 'onpush-node-d',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent, OnpushNodeGComponent, SourceCodeComponent],
  templateUrl: './onpush-node-d.component.html',
  styleUrls: ['./onpush-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeDComponent extends AbsctractComponentNode {
  title = 'D';

  nodeColor = '#ffd1d1';

  click($event: MouseEvent) {
    $event.stopPropagation();
    this.log(`click ${this.title}`);
  }
}
