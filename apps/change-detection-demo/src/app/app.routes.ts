import { Route } from '@angular/router';
import { OnpushDemoComponent } from './pages/onpush-demo/onpush-demo.component';
import { OnpushBindingsDemoComponent } from './pages/onpush-bindings-demo/onpush-bindings-demo.component';
import { SignalsDemoComponent } from './pages/signals-demo/signals-demo.component';

export const appRoutes: Route[] = [
  {
    path: 'onpush-demo',
    component: OnpushDemoComponent,
  },
  {
    path: 'onpush-bindings-demo',
    component: OnpushBindingsDemoComponent,
  },
  {
    path: 'signals-demo',
    component: SignalsDemoComponent,
  },
  {
    path: '**',
    redirectTo: 'onpush-demo',
  },
];
