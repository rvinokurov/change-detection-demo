import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeCComponent } from '../onpush-node-c/onpush-node-c.component';
import { AbsctractComponentNode } from '../../../../absctract-component-node';
import {OnpushNodeGComponent} from "../onpush-node-g/onpush-node-g.component";

@Component({
  selector: 'onpush-node-d',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent, OnpushNodeGComponent],
  templateUrl: './onpush-node-d.component.html',
  styleUrls: ['./onpush-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeDComponent extends AbsctractComponentNode {
  title = 'D';

  click($event: MouseEvent) {
    $event.stopPropagation();
    console.log(`click ${this.title}`);
  }
}
