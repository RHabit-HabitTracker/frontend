import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// PrimeNG imports:
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './themes/aura-custom-theme';
// import Aura from '@primeng/themes/aura'; // Aura predefined theme

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // PrimeNG providers:
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: MyPreset } })
  ],
};
