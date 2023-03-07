import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbsctractComponentNode} from '../../../../absctract-component-node';
import {Signal,} from '@demo/angular-next';
import {SignalPipe} from '../../pipes/signal.pipe';


@Component({
  selector: 'signal-container',
  standalone: true,
  imports: [CommonModule, SignalPipe],
  templateUrl: './signal-container.component.html',
  styleUrls: ['./signal-container.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalContainerComponent extends AbsctractComponentNode {
  nodeColor = '#8ae759';
  title = 'Signal';

  @Input() value?: Signal<any>;
}
