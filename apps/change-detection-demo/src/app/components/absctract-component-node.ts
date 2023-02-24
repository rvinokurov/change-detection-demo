import {Component, OnInit} from '@angular/core';

@Component({
  template: '',
})
export abstract class AbsctractComponentNode implements OnInit {
  abstract title: string;

  protected wrappedCounteOfRerender = 0;

  ngOnInit() {
    console.log(`Init ${this.title}`);
  }

  get countOfReRender() {
    return ++this.wrappedCounteOfRerender;
  }
}
