import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnpushNodeCComponent} from '../onpush-node-c/onpush-node-c.component';
import {AbsctractComponentNode} from '../../../../absctract-component-node';
import {SourceCodeComponent} from "../../../../components/source-code/source-code.component";

@Component({
  selector: 'onpush-node-g',
  standalone: true,
  imports: [CommonModule, OnpushNodeCComponent, SourceCodeComponent],
  templateUrl: './onpush-node-g.component.html',
  styleUrls: ['./onpush-node-g.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushNodeGComponent extends AbsctractComponentNode {
  title = 'G';

  nodeColor = '#9ce388';

  counter = 0;

  constructor(private readonly cdr: ChangeDetectorRef) {
    super();
  }

  override ngDoCheck() {
    super.ngDoCheck();
    this.counter++;


    if(this.counter % 2 === 0) {
      this.cdr.markForCheck();
    }
  }
}
