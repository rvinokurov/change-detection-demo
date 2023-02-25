import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OpenMessage, TooltipService} from './tooltip.service';
import {HighlightModule} from 'ngx-highlightjs';
import {HighlightPlusModule} from 'ngx-highlightjs/plus';

// todo отписки не интересны для учебного проекта
@Component({
  selector: 'change-detection-demo-source-code-tooltip',
  standalone: true,
  imports: [CommonModule, HighlightModule, HighlightPlusModule],
  templateUrl: './source-code-tooltip.component.html',
  styleUrls: ['./source-code-tooltip.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceCodeTooltipComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly tooltipService = inject(TooltipService);

  private isOpen = false;
  private coords: OpenMessage['coords'];

  content: string = '';

  ngOnInit() {
    this.tooltipService.isOpen$.subscribe(({ isOpen, coords, content }) => {
      this.isOpen = isOpen;
      this.coords = coords;
      this.content = content ?? '';
      this.cdr.markForCheck();
    });
  }

  @HostBinding('style.top')
  get top() {
    return `${this.coords?.top ? this.coords.top : 0}px`;
  }

  @HostBinding('style.left')
  get left() {
    return `${this.coords?.right ? this.coords.right : 0}px`;
  }

  @HostBinding('style.display')
  get display() {
    return this.isOpen ? 'block' : 'none';
  }

  @HostListener('click', ['$event'])
  click($event: MouseEvent) {
    $event.stopPropagation();
  }
}
