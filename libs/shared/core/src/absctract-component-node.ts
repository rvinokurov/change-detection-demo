import {Component, DoCheck, HostBinding, inject, OnInit} from '@angular/core';
import {LogSettingsService} from "./log-settings.service";

@Component({
  template: '',
})
export abstract class AbsctractComponentNode implements OnInit, DoCheck {
  abstract title: string;
  abstract nodeColor: string;

  private readonly logSettingsService = inject(LogSettingsService);

  protected wrappedCountOfRerender = 0;

  protected readonly backgroundColor = '#1a1a1a';

  protected logOptions() {
    return [
      `color: ${this.backgroundColor}`,
      `background: ${this.nodeColor}`,
      `padding: 2px 10px 2px 10px`,
      'font-weight: 600',
      'border-radius: 3px'
    ];
  }

  protected log(message: string) {
    console.log(`%c-> ${message}`, this.logOptions().join(';'));
  }

  ngOnInit() {
    if(this.logSettingsService.settings.onInit) {
      this.log(`OnInit ${this.title}`);
    }
  }

  ngDoCheck() {
    if(this.logSettingsService.settings.doCheck) {
      this.log(`DoCheck ${this.title}`);
    }
  }

  get countOfReRender() {
    this.log(`re-render ${this.title}`);

    return this.wrappedCountOfRerender++;
  }

  @HostBinding('style.background-color')
  get bgColor() {
    return this.nodeColor;
  }

  @HostBinding('class')
  get className() {
    return 'onpush-node';
  }

  get instance() {
    return this;
  }
}
