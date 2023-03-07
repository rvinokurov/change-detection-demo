import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { effect, isSignal } from '@demo/angular-next';

@Pipe({ name: 'signal', standalone: true, pure: false })
export class SignalPipe implements PipeTransform {
  private current: unknown;
  private currentValue: unknown = undefined;

  constructor(private readonly cdr: ChangeDetectorRef) {}
  transform(value: unknown): unknown {
    this.currentValue = isSignal(value) ? value() : value;

    if (this.current !== value && isSignal(value)) {
      this.current = value;
      effect(() => {
        this.currentValue = value();
        this.cdr.detectChanges();
      });
    }

    return this.currentValue;
  }
}
