import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "../../absctract-component-node";

@Component({
  selector: 'change-detection-demo-onpush-bindings-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush-bindings-demo.component.html',
  styleUrls: ['./onpush-bindings-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushBindingsDemoComponent extends AbsctractComponentNode {
  title = 'OnPush Demo';
}
