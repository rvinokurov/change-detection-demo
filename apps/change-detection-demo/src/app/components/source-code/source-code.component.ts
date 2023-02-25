import {Component, ElementRef, inject, Input, ViewEncapsulation,} from '@angular/core';
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
})
export class SourceCodeComponent {
  @Input() method: Function = () => {};
  @Input() instance: Object = {};

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

  showCode($event: MouseEvent) {
    $event.stopPropagation();
    const className = this.instance.constructor.name;
    const methodName = this.parseMethodName(this.method.toString());
    this.tooltipService.show(
      this.elementRef.nativeElement,
      this.getMethodBody(className, methodName)
    );
  }
}
