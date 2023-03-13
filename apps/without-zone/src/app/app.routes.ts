import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'signals-demo',
    loadChildren: () =>
      import('@change-detection-demo/signals-demo').then(
        (mod) => mod.signalsDemoRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'signals-demo',
  },
];
