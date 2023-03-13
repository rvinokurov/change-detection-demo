import {ChangeDetectionStrategy, Component, Input, Signal, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignalContainerComponent} from '../signal-container/signal-container.component';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";
import {SignalInput} from "@change-detection-demo/angular-next";

@Component({
  selector: 'signals-node-b',
  standalone: true,
  imports: [CommonModule, SignalContainerComponent],
  templateUrl: './signals-node-b.component.html',
  styleUrls: ['./signals-node-b.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsNodeBComponent extends AbsctractComponentNode {
  nodeColor = '#d9d9a6';
  title = 'B';

  @Input() @SignalInput() value!: Signal<any>;
}
