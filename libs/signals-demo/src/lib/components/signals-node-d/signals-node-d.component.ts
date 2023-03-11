import {ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Signal, SignalInput} from '@change-detection-demo/angular-next';
import {destroyableEffect, DestroyableStream} from '../../destroyable-effect';
import {interval, tap} from 'rxjs';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";

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
