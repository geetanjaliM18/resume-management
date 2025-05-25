import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutes } from './app-routing.module';

export const appConfig = {
  providers: [
    provideRouter(AppRoutes),
    provideAnimations()
  ]
};