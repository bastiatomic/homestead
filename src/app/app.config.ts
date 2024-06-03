import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  provideAnimations(),
    provideHttpClient(),
    provideOAuthClient()
    ]
};
