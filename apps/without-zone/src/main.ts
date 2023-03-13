import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import {NgZone} from "@angular/core";




bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), {
    provide: NgZone,
    useValue: new NgZone({ shouldCoalesceEventChangeDetection: false })
  }],
}).catch((err) => console.error(err));
