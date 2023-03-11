import { Route } from '@angular/router';
// import { OnpushBindingsDemoComponent } from './pages/onpush-bindings-demo/onpush-bindings-demo.component';
// import { SignalsDemoComponent } from './pages/signals-demo/signals-demo.component';

export const appRoutes: Route[] = [
  {
    path: 'onpush-demo',
    loadChildren: () =>
      import('@change-detection-demo/on-push-demo').then(
        (mod) => mod.onPushDemoRoutes
      ),
  },
  {
    path: 'onpush-bindings-demo',
    loadChildren: () =>
      import('@change-detection-demo/on-push-bindings-demo').then(
        (mod) => mod.onPushBindingsDemoRoutes
      ),
  },
  {
    path: 'signals-demo',
    loadChildren: () =>
      import('@change-detection-demo/signals-demo').then(
        (mod) => mod.signalsDemoRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'onpush-demo',
  },
];
