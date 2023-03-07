import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignalsDemoRootComponent} from "./components/signals-demo-root/signals-demo-root.component";
import {SignalsNodeAComponent} from "./components/signals-node-a/signals-node-a.component";

@Component({
  selector: 'change-detection-demo-signals-demo',
  standalone: true,
  imports: [CommonModule, SignalsDemoRootComponent, SignalsNodeAComponent],
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignalsDemoComponent {}
