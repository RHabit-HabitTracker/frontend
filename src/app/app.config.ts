import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// PrimeNG imports:
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './themes/aura-custom-theme';
// import Aura from '@primeng/themes/aura'; // Aura theme - we can use this instead of MyPreset later if we want

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // PrimeNG providers:
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: MyPreset } }), // Change preset to Aura if you want to use the Aura theme
    provideHttpClient(),
  ],
};
