import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavComponent } from './app/components/nav/nav';

bootstrapApplication(NavComponent, appConfig).catch((err) => console.error(err));
