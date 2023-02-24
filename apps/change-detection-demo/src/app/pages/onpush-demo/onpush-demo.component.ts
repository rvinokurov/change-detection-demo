import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushNodeAComponent } from './components/onpush-node-a/onpush-node-a.component';
import { OnpushNodeDComponent } from './components/onpush-node-d/onpush-node-d.component';
import { AbsctractComponentNode } from '../../absctract-component-node';
import { LogSettingsService } from '../../log-settings.service';

@Component({
  selector: 'change-detection-demo-onpush-demo',
  standalone: true,
  imports: [CommonModule, OnpushNodeAComponent, OnpushNodeDComponent],
  templateUrl: './onpush-demo.component.html',
  styleUrls: ['./onpush-demo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushDemoComponent extends AbsctractComponentNode {
  title = 'OnPush Demo';

  nodeColor = '#e0e0e0';

  constructor() {
    super();
    inject(LogSettingsService).configure({ doCheck: true, onInit: true });
  }
}
