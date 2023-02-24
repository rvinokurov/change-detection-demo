import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'change-detection-demo-onpush-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush-demo.component.html',
  styleUrls: ['./onpush-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class OnpushDemoComponent {}
