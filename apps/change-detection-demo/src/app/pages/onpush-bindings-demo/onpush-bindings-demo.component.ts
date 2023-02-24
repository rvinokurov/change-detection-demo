import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbsctractComponentNode} from "../../absctract-component-node";
import {OnpushBindingsNodeAComponent} from "./components/onpush-bindings-node-a/onpush-bindings-node-a.component";
import {LogSettingsService} from "../../log-settings.service";

@Component({
  selector: 'change-detection-demo-onpush-bindings-demo',
  standalone: true,
  imports: [CommonModule, OnpushBindingsNodeAComponent],
  templateUrl: './onpush-bindings-demo.component.html',
  styleUrls: ['./onpush-bindings-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushBindingsDemoComponent extends AbsctractComponentNode {
  title = 'OnPush Demo';

  nodeColor = '#e0e0e0';

  constructor() {
    super();
    inject(LogSettingsService).configure({doCheck: false, onInit: false})
  }
}
