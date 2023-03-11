import {
  ChangeDetectionStrategy,
  Component, inject,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode, LogSettingsService} from "@change-detection-demo/shared/core";
import {AsyncNodeAComponent} from "./components/async-node-a/async-node-a.component";

@Component({
  selector: 'change-detection-demo-async-bindings',
  standalone: true,
  imports: [CommonModule, AsyncNodeAComponent],
  templateUrl: './async-bindings.component.html',
  styleUrls: ['./async-bindings.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncBindingsComponent  extends AbsctractComponentNode {
  title = 'Change Detection in Details Demo';

  nodeColor = '#e0e0e0';

  constructor() {
    super();
    inject(LogSettingsService).configure({ doCheck: false, onInit: false });
  }
}
