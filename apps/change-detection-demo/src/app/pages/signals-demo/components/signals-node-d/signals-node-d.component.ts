import {ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Signal} from '@demo/angular-next';
import {SignalInput} from '../../../../../../../../libs/angular-next/src/lib/decorators/signal';
import {AbsctractComponentNode} from '../../../../absctract-component-node';
import {destroyableEffect, DestroyableStream} from '../../destroyable-effect';
import {interval, tap} from 'rxjs';

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

  @Input() @SignalInput() value!: Signal<any>;

  // stream$ = destroyableStream(
  //   interval(1000).pipe(tap((value) => console.log(value))),
  //   true
  // );

  //destroyableStream  = destroyableStreamFactory();
  destroyableStream = inject(DestroyableStream).create();

  logValue = destroyableEffect(() => {
    const v = this.value();
    console.log(`value is ${v}`);
  });

  override ngOnInit() {
    super.ngOnInit();


    this.destroyableStream(
      interval(1000).pipe(tap((value) => console.log(value))),
      true
    );
  }
}
