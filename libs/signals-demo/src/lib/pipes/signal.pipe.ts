import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { effect, Signal } from '@change-detection-demo/angular-next';
import { Effect } from '../../../../shared/angular-next/src/lib/effect';

@Pipe({ name: 'signal', standalone: true, pure: false })
export class SignalPipe implements PipeTransform, OnDestroy {
  private currentSignal: Signal<any> | null = null;
  private value: any = null;
  private effect: Effect | null = null;

  constructor(private readonly cdr: ChangeDetectorRef) {}
  transform(value: Signal<any>): unknown {
    // получение значения сигнала
    this.value = value();

    // если нет текущего сигнала или он изменился значению
    // нужно создать новый эффект
    if (this.currentSignal !== value) {
      this.currentSignal = value;
      // удалить текущий эффект если есть
      this.destroy();

      this.effect = effect(this.updateLatestValue);
    }

    return value();
  }

  updateLatestValue = () => {
    this.value = this.currentSignal!();

    // от ручного  запуска CD пока никуда не деться
    this.cdr.detectChanges();
  };

  ngOnDestroy() {
    if (this.effect) {
      this.effect.destroy();
    }
  }

  private destroy() {}
}
