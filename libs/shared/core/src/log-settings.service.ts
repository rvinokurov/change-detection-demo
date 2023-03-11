import { Injectable } from '@angular/core';

export interface LogConfig {
  doCheck: boolean;
  onInit: boolean;
}

const defaultConfig: LogConfig = {
  doCheck: true,
  onInit: true,
};

@Injectable({
  providedIn: 'root',
})
export class LogSettingsService {
  private config = defaultConfig;

  constructor() {}

  configure(config: Partial<LogConfig>) {
    this.config = {...this.config, ...config};
  }

  get settings(): LogConfig {
    return this.config;
  }
}
