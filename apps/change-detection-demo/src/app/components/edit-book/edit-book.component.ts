import {
  ChangeDetectionStrategy,
  Component, effect,
  Input,
  SettableSignal,
  ViewEncapsulation,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignalComponent} from '../signal/signal.component';
import {AbsctractComponentNode} from '../absctract-component-node';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Book} from '../../book.interface';
import {fromObservable} from "../../from-observable";
import {startWith} from "rxjs";

@Component({
  selector: 'edit-book',
  standalone: true,
  imports: [CommonModule, SignalComponent, ReactiveFormsModule],
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBookComponent extends AbsctractComponentNode {
  nodeColor = '#ffe19f';
  title = 'Linked Counter';

  @Input() books!: SettableSignal<Book[]>;

  bookId = new FormControl<number>(0);
  bookTitle = new FormControl<string>('');
  bookAuthor = new FormControl<string>('');
  bookIdSignal = fromObservable(this.bookId.valueChanges.pipe(startWith(0)));


  constructor() {
    super();
    effect(() => {
      const index = this.bookIdSignal() || 0;
      const books = this.books();
      if(books[index]) {
        this.bookTitle.setValue(books[index].title);
        this.bookAuthor.setValue(books[index].author);
      }
    });
  }


  update() {
    this.books.mutate((books) => {
      const index = this.bookId.value || 0;

      books[index] = {
        author: this.bookAuthor.value!,
        title: this.bookTitle.value!,
      };
    });
  }
}
