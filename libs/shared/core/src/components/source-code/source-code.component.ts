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
import { CommonModule } from '@angular/common';
import { TooltipService } from '../source-code-tooltip/tooltip.service';
import { classInfo } from 'components-chunks';
import { templateInfo } from 'components-template-chunks';

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
  @Input() template: string = '';
  @Input() combined: Array<string> = [];

  @ViewChild('button') button: ElementRef<HTMLElement> | null = null;

  private readonly tooltipService = inject(TooltipService);
  private readonly elementRef = inject(ElementRef);

  parseMethodName(name: string) {
    const match = name.match(/^[A-z[0-9_]+/);
    return match && match[0] ? match[0] : '';
  }

  private getPropertyBody(className: string, propertyName: string): string {
    return (
      classInfo
        .find((classInfo) => classInfo?.className === className)
        ?.properties.find((property) => property.name === propertyName)?.body ||
      ''
    );
  }

  private getMethodBody(className: string, methodName: string): string {
    return (
      classInfo
        .find((classInfo) => classInfo?.className === className)
        ?.methods.filter((method) => method.name === methodName)
        ?.map(({ body }) => body) || []
    ).join('\n\n');
  }

  private getTemplateBody(className: string, template: string): string {
    return (
      templateInfo
        .find((classInfo) => classInfo?.className === className)
        ?.tags.find((method) => method.name === template)?.body || ''
    );
  }

  private getClassPartBody(className: string): string {
    return [
      ...this.combined
        .map((part) => this.getPropertyBody(className, part))
        .filter((part) => part.length),
      ...this.combined
        .map((part) => this.getMethodBody(className, part))
        .filter((part) => part.length),
    ].join('\n\n');
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
    const className = this.instance.constructor.name;
    const methodName = this.parseMethodName(this.method.toString());

    this.tooltipService.show(
      this.elementRef.nativeElement,
      this.template
        ? this.getTemplateBody(className, this.template)
        : this.combined.length
        ? this.getClassPartBody(className)
        : this.getMethodBody(className, methodName)
    );
  }
}
