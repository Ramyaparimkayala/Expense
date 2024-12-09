//file which is used to bootstrap the applicaiton when we don't use Modular approach or when we use standalone component approach
//starts from here. bootstraps - starts Angular app and loads AppComponent and follows rest based on content in AppComponent.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
