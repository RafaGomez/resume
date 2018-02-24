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
import {MatCardModule, MatExpansionModule, MatDividerModule, MatProgressBarModule, MatIconModule} from '@angular/material';
import { ResumeDataService } from './services/resume-data.service';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [ResumeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
