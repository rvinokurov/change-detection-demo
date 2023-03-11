import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnpushBindingsNodeAComponent} from "./components/onpush-bindings-node-a/onpush-bindings-node-a.component";
import {AbsctractComponentNode, LogSettingsService} from "@change-detection-demo/shared/core";

@Component({
  selector: 'change-detection-demo-on-push-bindings-demo',
  standalone: true,
  imports: [CommonModule, OnpushBindingsNodeAComponent],
  templateUrl: './on-push-bindings-demo.component.html',
  styleUrls: ['./on-push-bindings-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushBindingsDemoComponent extends AbsctractComponentNode {
  title = 'OnPush Bindings Demo';

  nodeColor = '#e0e0e0';

  constructor() {
    super();
    inject(LogSettingsService).configure({doCheck: false, onInit: false})
  }
}
