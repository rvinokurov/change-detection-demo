import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsctractComponentNode} from "@change-detection-demo/shared/core";
import {BehaviorSubject, interval, mergeAll, of} from "rxjs";
import {AsyncNodeBComponent} from "../async-node-b/async-node-b.component";
import {AsyncWithLoggingPipe} from "../../pipes/async-with-logging.pipe";
import {AsyncNodeCComponent} from "../async-node-c/async-node-c.component";
import {AsyncNodeDComponent} from "../async-node-d/async-node-d.component";

@Component({
  selector: 'async-node-a',
  standalone: true,
  imports: [CommonModule, AsyncNodeBComponent, AsyncWithLoggingPipe, AsyncNodeCComponent, AsyncNodeDComponent],
  templateUrl: './async-node-a.component.html',
  styleUrls: ['./async-node-a.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncNodeAComponent extends AbsctractComponentNode {
  nodeColor = '#9ce388';
  title = 'A';

  valueForA$ = new BehaviorSubject(0);

  valueForB$ = new BehaviorSubject(0);

  private stream$ = new BehaviorSubject(of(0));

  interval$ = this.stream$.pipe(mergeAll());

  incA() {
    this.valueForA$.next(this.valueForA$.value + 1);
  }

  incB() {
    this.valueForB$.next(this.valueForB$.value + 1);
  }

  runTimer() {
    this.stream$.next(interval(1000));
  }
}
