import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'my-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      >{{ name }}:
      <span>
        <button (click)="valueChange.next(value + 1)">+</button>
        <button (click)="valueChange.next(value - 1)">-</button>
      </span></span
    >
  `,
})
export class AppValueComponent {
  @Input() name?: string;

  @Input() value: number = 0;

  @Output() valueChange = new EventEmitter<number>();
}
