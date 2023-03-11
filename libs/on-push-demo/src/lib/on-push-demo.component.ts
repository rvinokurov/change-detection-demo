import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeAComponent } from './components/onpush-node-a/onpush-node-a.component';
import { OnpushNodeDComponent } from './components/onpush-node-d/onpush-node-d.component';
import {AbsctractComponentNode, LogSettingsService} from "@change-detection-demo/shared/core";

@Component({
  selector: 'on-push-demo',
  standalone: true,
  imports: [CommonModule, OnpushNodeAComponent, OnpushNodeDComponent],
  templateUrl: './on-push-demo.component.html',
  styleUrls: ['./on-push-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushDemoComponent extends AbsctractComponentNode {
  title = 'OnPush Demo';

  nodeColor = '#e0e0e0';

  constructor() {
    super();
    inject(LogSettingsService).configure({ doCheck: true, onInit: true });
  }
}
