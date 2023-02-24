import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeCComponent } from '../onpush-node-c/onpush-node-c.component';
import { AbsctractComponentNode } from '../../../../absctract-component-node';

@Component({
  selector: 'onpush-node-g',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent],
  templateUrl: './onpush-node-g.component.html',
  styleUrls: ['./onpush-node-g.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeGComponent extends AbsctractComponentNode {
  title = 'F';
}
