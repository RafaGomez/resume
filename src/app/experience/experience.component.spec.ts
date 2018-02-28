import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { MatCardModule, MatExpansionModule, MatDividerModule, MatIconModule, MatListModule } from '@angular/material';
import { ResumeDataService } from '../services/resume-data.service';
import { Observable } from 'rxjs/Observable';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceComponent ],
      imports: [    MatCardModule,
        MatExpansionModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule],
      providers: [ResumeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    component.experiencesObs = Observable.of([{
      company: 'COMPANY',
      from: '2000',
      to: '3000',
      job: 'JOB',
      highlights: [
        'FIRST HIGHLIGHT'
      ]
    }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should display only one experience', () => {
    expect(fixture.nativeElement.querySelectorAll('.experience-panel').length).toEqual(1);
  });
});
