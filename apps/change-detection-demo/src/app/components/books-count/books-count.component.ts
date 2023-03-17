import {ChangeDetectionStrategy, Component, computed, Input, SettableSignal, ViewEncapsulation,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignalComponent} from "../signal/signal.component";
import {SignalInput} from "@change-detection-demo/angular-next";
import {AbsctractComponentNode} from "../absctract-component-node";
import {SignalPipePipe} from "../../pipes/signalPipe.pipe";
import {Book} from "../../book.interface";

@Component({
  selector: 'books-count',
  standalone: true,
  imports: [CommonModule, SignalComponent, SignalPipePipe],
  templateUrl: './books-count.component.html',
  styleUrls: ['./books-count.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksCount extends AbsctractComponentNode {
  //for debug
  nodeColor = '#d9d9a6';
  title = 'BooksCount';


  @Input() @SignalInput() books!: SettableSignal<Book[]>;

  count = computed(() => this.books().length);
}
