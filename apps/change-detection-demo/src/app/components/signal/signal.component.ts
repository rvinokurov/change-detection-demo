import {ChangeDetectionStrategy, Component, Input, Signal, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignalInput} from "@change-detection-demo/angular-next";
import {SignalPipePipe} from "../../pipes/signalPipe.pipe";
import {AbsctractComponentNode} from "../absctract-component-node";


@Component({
  selector: 'signal',
  standalone: true,
  imports: [CommonModule, SignalPipePipe],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent extends AbsctractComponentNode {
  nodeColor = '#8ae759';
  title = 'Signal';

  @Input() valueName: string = '';
  @Input() @SignalInput() signalValue!: Signal<any>;

}
