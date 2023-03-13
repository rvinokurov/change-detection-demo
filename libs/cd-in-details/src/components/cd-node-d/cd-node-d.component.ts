import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsctractComponentNode } from '@change-detection-demo/shared/core';

@Component({
  selector: 'cd-node-d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cd-node-d.component.html',
  styleUrls: ['./cd-node-d.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdNodeDComponent
  extends AbsctractComponentNode
  implements AfterViewInit, OnDestroy
{
  nodeColor = '#f1d8b2';
  title = 'D';

  @Output() someChange = new EventEmitter();

  @ViewChild('button') button?: ElementRef<HTMLElement>;

  constructor(private readonly ngZone: NgZone) {
    super();
  }

  click = () => {
    this.someChange.emit(null);
  };


  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.button?.nativeElement.addEventListener('click', this.click);
    });
  }

  ngOnDestroy() {
    this.button?.nativeElement.removeEventListener('click', this.click);
  }
}
