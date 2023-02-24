import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'change-detection-demo-onpush-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush-node.component.html',
  styleUrls: ['./onpush-node.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class OnpushNodeComponent {}
