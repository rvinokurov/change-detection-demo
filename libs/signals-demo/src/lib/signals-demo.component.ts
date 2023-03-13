import {Component, inject, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignalsNodeAComponent} from "./components/signals-node-a/signals-node-a.component";
import {LogSettingsService} from "@change-detection-demo/shared/core";

@Component({
  selector: 'change-detection-demo-signals-demo',
  standalone: true,
  imports: [CommonModule, SignalsNodeAComponent],
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignalsDemoComponent {
  constructor() {
    inject(LogSettingsService).configure({ doCheck: false, onInit: false });
  }
}
