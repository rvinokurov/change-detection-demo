import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipService} from '../source-code-tooltip/tooltip.service';
import {classInfo} from '../../components-chunks';

@Component({
  selector: 'change-detection-demo-source-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceCodeComponent implements AfterViewInit, OnDestroy {
  @Input() method: Function = () => {};
  @Input() instance: Object = {};

  @ViewChild('button') button: ElementRef<HTMLElement> | null = null;


  private readonly tooltipService = inject(TooltipService);
  private readonly elementRef = inject(ElementRef);

  parseMethodName(name: string) {
    const match = name.match(/^[A-z[0-9_]+/);
    return match && match[0] ? match[0] : '';
  }
  private getMethodBody(className: string, methodName: string): string {
    return (
      classInfo
        .find((classInfo) => classInfo?.className === className)
        ?.methods.find((method) => method.name === methodName)?.body || ''
    );
  }

  click = ($event: MouseEvent) => {
    $event.stopPropagation();
    this.showCode();
  };

  ngAfterViewInit() {
    this.button?.nativeElement.addEventListener('click', this.click);
  }

  ngOnDestroy() {
    this.button?.nativeElement.removeEventListener('click', this.click);
  }

  showCode() {
    console.log('show');
    const className = this.instance.constructor.name;
    const methodName = this.parseMethodName(this.method.toString());
    this.tooltipService.show(
      this.elementRef.nativeElement,
      this.getMethodBody(className, methodName)
    );
  }
}
