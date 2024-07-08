import { HttpClientModule } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    BrowserModule,
    AppRoutingModule,
  ]
};

export class AppModule {}
