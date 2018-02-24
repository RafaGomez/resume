import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
// Angular material components
import {MatCardModule, MatExpansionModule, MatDividerModule} from '@angular/material';
import { ResumeDataService } from './services/resume-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatCardModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [ResumeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
