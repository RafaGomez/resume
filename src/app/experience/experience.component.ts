import { ResumeDataService } from './../services/resume-data.service';
import { Experience } from './../models/Experience';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  private panelOpenState;

  public experiencesObs: Observable<Experience[]>;

  constructor(private _resumeServ: ResumeDataService) { }



  ngOnInit() {
    this.experiencesObs = this._resumeServ.getExperiences();
  }

}
