import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeBComponent } from '../onpush-node-b/onpush-node-b.component';
import { AbsctractComponentNode } from '../../../../absctract-component-node';

@Component({
  selector: 'onpush-node-a',
  standalone: true,
  imports: [CommonModule, OnpushNodeBComponent],
  templateUrl: './onpush-node-a.component.html',
  styleUrls: ['./onpush-node-a.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeAComponent extends AbsctractComponentNode {
  nodeColor = '#9ce388';
  title = 'A';
}
