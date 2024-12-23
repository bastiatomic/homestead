import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './app/archive/environments';
import { routes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()), // Provide the Auth service here
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
  ],
}).catch((err) => console.error(err));
