import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes ?? []),
  },
  {
    path: 'goals',
    loadChildren: () => import('goals/Routes').then((m) => m.remoteRoutes ?? []),
  },
];
