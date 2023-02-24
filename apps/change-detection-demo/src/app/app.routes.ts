import { Route } from '@angular/router';
import { OnpushDemoComponent } from './pages/onpush-demo/onpush-demo.component';

export const appRoutes: Route[] = [
  {
    path: 'onpush-demo',
    component: OnpushDemoComponent,
  },
  {
    path: '**',
    redirectTo: 'onpush-demo'
  }
];
