import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  template: '',
})
export abstract class AbsctractComponentNode implements OnInit, DoCheck {
  abstract title: string;

  protected wrappedCounteOfRerender = 0;

  ngOnInit() {
    console.log(`OnInit ${this.title}`);
  }

  ngDoCheck() {
    console.log(`DoCheck ${this.title}`);
  }

  get countOfReRender() {
    console.log(`re-render ${this.title}`);

    return this.wrappedCounteOfRerender++;
  }
}
