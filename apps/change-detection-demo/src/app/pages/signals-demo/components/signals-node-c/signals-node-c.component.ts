import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbsctractComponentNode} from '../../../../absctract-component-node';
import {SignalContainerComponent} from '../signal-container/signal-container.component';
import {Signal} from '@demo/angular-next';

@Component({
  selector: 'signals-node-c',
  standalone: true,
  imports: [CommonModule, SignalContainerComponent],
  templateUrl: './signals-node-c.component.html',
  styleUrls: ['./signals-node-c.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsNodeCComponent extends AbsctractComponentNode {
  nodeColor = '#92dee1';
  title = 'Computed';

  @Input() value!: Signal<any>;
}
