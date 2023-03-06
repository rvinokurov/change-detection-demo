import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'change-detection-demo-signals-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignalsDemoComponent {}
