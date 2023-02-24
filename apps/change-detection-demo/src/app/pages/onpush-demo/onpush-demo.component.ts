import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnpushNodeAComponent} from "../../components/onpush-node-a/onpush-node-a.component";
import {OnpushNodeDComponent} from "../../components/onpush-node-d/onpush-node-d.component";

@Component({
  selector: 'change-detection-demo-onpush-demo',
  standalone: true,
  imports: [CommonModule, OnpushNodeAComponent, OnpushNodeDComponent],
  templateUrl: './onpush-demo.component.html',
  styleUrls: ['./onpush-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushDemoComponent {}
