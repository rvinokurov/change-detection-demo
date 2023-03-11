import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'change-detection-demo-async-bindings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-bindings.component.html',
  styleUrls: ['./async-bindings.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncBindingsComponent {}
