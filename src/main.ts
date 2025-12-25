// // import { bootstrapApplication } from '@angular/platform-browser';
// // import { appConfig } from './app/app.config';
// // import { AppComponent } from './app/app.component';

// // bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));

// // src/main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';
// import { AppComponent } from './app/app.component';
// import { provideAnimations } from '@angular/platform-browser/animations'; // optional if needed

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     provideAnimations(), // optional, only if you need Angular animations
//   ],
// }).catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
