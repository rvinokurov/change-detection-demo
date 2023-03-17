import {RouterModule} from '@angular/router';
import {ChangeDetectionStrategy, Component, signal,} from '@angular/core';
import {AbsctractComponentNode} from './components/absctract-component-node';
import {Book} from "./book.interface";
import {BooksListComponent} from "./components/books-list/books-list.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";
import {BooksCount} from "./components/books-count/books-count.component";

@Component({
  standalone: true,
  imports: [
    RouterModule,
    BooksListComponent,
    AddBookComponent,
    EditBookComponent,
    BooksCount,
  ],
  selector: 'change-detection-demo-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends AbsctractComponentNode {
  title = 'Signals';

  nodeColor = '#b3efd0';

  books = signal<Book[]>([{
    author: 'Роберт Мартин',
    title: 'Идеальный программист',
  }, {
    author: 'Мартин Фаулер',
    title: 'Рефакторинг'
  }]);



}
