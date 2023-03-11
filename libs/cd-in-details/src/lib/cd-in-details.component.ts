import {
  ChangeDetectionStrategy,
  Component, inject,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode, LogSettingsService} from "@change-detection-demo/shared/core";
import {CdNodeAComponent} from "../components/cd-node-a/cd-node-a.component";

@Component({
  selector: 'change-detection-demo-cd-in-details',
  standalone: true,
  imports: [CommonModule, CdNodeAComponent],
  templateUrl: './cd-in-details.component.html',
  styleUrls: ['./cd-in-details.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdInDetailsComponent extends AbsctractComponentNode {
  title = 'Change Detection in Details Demo';

  nodeColor = '#e0e0e0';

  constructor() {
    super();
    inject(LogSettingsService).configure({ doCheck: true, onInit: false });
  }
}
