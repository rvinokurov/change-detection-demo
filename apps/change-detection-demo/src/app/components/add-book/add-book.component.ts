import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SettableSignal,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalComponent } from '../signal/signal.component';
import { AbsctractComponentNode } from '../absctract-component-node';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../book.interface';

@Component({
  selector: 'add-book',
  standalone: true,
  imports: [CommonModule, SignalComponent, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBookComponent extends AbsctractComponentNode {
  nodeColor = '#ffe19f';
  title = 'Linked Counter';

  @Input() books!: SettableSignal<Book[]>;

  bookTitle = new FormControl<string>('');
  bookAuthor = new FormControl<string>('');

  add() {
    if (this.bookTitle.value && this.bookAuthor.value) {
      this.books.mutate((books) =>
        books.push({
          author: this.bookAuthor.value!,
          title: this.bookTitle.value!,
        })
      );
    }
  }
}
