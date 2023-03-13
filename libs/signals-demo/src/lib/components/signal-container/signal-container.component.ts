import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Signal, SignalInput,} from '@change-detection-demo/angular-next';
import {SignalPipe} from '../../pipes/signal.pipe';
import {AbsctractComponentNode} from '@change-detection-demo/shared/core';


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

  @Input() valueName: string = '';
  @Input() @SignalInput() signalValue!: Signal<any>;

}
