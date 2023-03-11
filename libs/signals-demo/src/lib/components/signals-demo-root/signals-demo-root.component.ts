import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import {AppValueComponent} from "../app-value.component";
import {
  computed,
  effect,
  Signal,
  signal,
  SignalInput,
  SignalWithUndefined,
  toObservable, toSignal
} from "@change-detection-demo/angular-next";

@Component({
  selector: 'change-detection-demo-signals-demo-root',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIf, AppValueComponent],
  templateUrl: './signals-demo-root.component.html',
  styleUrls: ['./signals-demo-root.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignalsDemoRootComponent {
  a = signal(0);
  b = signal(0);
  c = computed(() => this.a() + this.b());

  // мои фантазии на тему конечной реализации этих хелперов
  d$ = toObservable(this.c);
  e = toSignal(this.d$);

  /*
    пример в вакууме, как инпуты смогут стать сигналами (естессна как вариант будет всё в 1 декораторе)
    - прощай ngOnChanges,

    + привет effect(() => logic)
    + перевычисления изолируются на уровне компонента, т.к. оно внутри теперь сигналы
    + При таком подходе будет отказ от цикла checkNoChanges, т.к. эффекты запускаются гарантировано после того, как все перевычисления прошли
  */

  // как то должны задаваться дефолтные значения
  /*
    проблема в том, что input по сути должен передавать то же самое значение, что и входящий аргумент
    Моё имхо, отчасти это тоже было проблемой и при ObservableInput идеях

    Реактивные примитивы по сути, могут работать под капотом
    однако, как их протащить на шаблон - хороший вопрос
    мне такие сигналы не сильно симпатичны по API
    Все вопросы к null/undefined (по сути они ж тоже сигналы) и значениям через инициализацию (как в примере ниже)

    Хотя чисто на практике они могут быть примерно такие:
      <app-child [prop]="value | undefined"></app-child>

    В компоненте prop: Signal<value | undefined>; (т.е. сигнал будет всегда)
  */
  @Input() @SignalInput() signal = signal(0);
  @Input() @SignalInput() signal2: Signal<number> = signal(0);
  @Input() @SignalWithUndefined() signal3: Signal<number> = signal(0);

  static ngAcceptInputType_signal: number;
  static ngAcceptInputType_signal2: number;

  ngOnInit(): void {
    // this.signal2.set() -- а вот фига 2 мы можем поменять это значение (логично же)

    effect(() => {
      const signal = this.signal();
      console.log(`signal changed to ${signal}`);

      const signal2 = this.signal2();
      console.log(`signal2 changed to ${signal2}`);

      const signal3 = this.signal3();
      console.log(`signal3 changed to ${signal3}`);
    });

    effect(() => {});
  }
}
