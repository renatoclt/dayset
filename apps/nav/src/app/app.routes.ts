import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./components/nav/nav.routes').then((m) => m.remoteRoutes),
  },
];
