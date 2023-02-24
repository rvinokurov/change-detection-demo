import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbsctractComponentNode} from "../absctract-component-node";
import {OnpushNodeBComponent} from "../onpush-node-b/onpush-node-b.component";

@Component({
  selector: 'onpush-node-a',
  standalone: true,
  imports: [CommonModule, OnpushNodeBComponent],
  templateUrl: './onpush-node-a.component.html',
  styleUrls: ['./onpush-node-a.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeAComponent extends AbsctractComponentNode{
  title = 'A'
}

