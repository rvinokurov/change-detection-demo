import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbsctractComponentNode} from "../absctract-component-node";
import {OnpushNodeCComponent} from "../onpush-node-c/onpush-node-c.component";

@Component({
  selector: 'onpush-node-d',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent],
  templateUrl: './onpush-node-d.component.html',
  styleUrls: ['./onpush-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeDComponent extends AbsctractComponentNode{
  title = 'D'
}

