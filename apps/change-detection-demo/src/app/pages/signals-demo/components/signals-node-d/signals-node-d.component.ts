import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '../../../../absctract-component-node';
import { effect, Signal } from '@demo/angular-next';
import { SignalInput } from '../../../../../../../../libs/angular-next/src/lib/decorators/signal';
import { Effect } from '../../effect.decorator';

@Component({
  selector: 'signals-node-d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-node-d.component.html',
  styleUrls: ['./signals-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsNodeDComponent extends AbsctractComponentNode {
  nodeColor = '#d9a8a6';
  title = 'D';

  f = effect(() => {
    const v = this.value()!;

    this.log(`value is ${v}`)
  });

  @Input() @SignalInput() value!: Signal<any>;

  // @Effect()
  // logValue = () => {
  //   const v = this.value()!;
  //   this.log(`value is ${v}`);
  // };

  // constructor() {
  //   super();
  //
  // }

  ngOnDestroy() {
    this.f.destroy()
  }
}
