import {
  ChangeDetectorRef, effect, Effect,
  OnDestroy,
  Pipe,
  PipeTransform, Signal,
} from '@angular/core';

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

      // подписаться для обновления изменений в компоненте
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
