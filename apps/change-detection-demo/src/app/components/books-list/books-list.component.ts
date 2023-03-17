import {ChangeDetectionStrategy, Component, Input, SettableSignal, Signal, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignalComponent} from "../signal/signal.component";
import {SignalInput} from "@change-detection-demo/angular-next";
import {AbsctractComponentNode} from "../absctract-component-node";
import {SignalPipePipe} from "../../pipes/signalPipe.pipe";
import {Book} from "../../book.interface";

@Component({
  selector: 'books-list',
  standalone: true,
  imports: [CommonModule, SignalComponent, SignalPipePipe],
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent extends AbsctractComponentNode {
  //for debug
  nodeColor = '#d9d9a6';
  title = 'BooksList';


  @Input()  books!: SettableSignal<Book[]>;
}
