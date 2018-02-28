import { ResumeDataService } from './../services/resume-data.service';
import { Experience } from './../models/Experience';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experiencesObs: Observable<Experience[]>;

  private panelOpenState;

  // public experiencesObs: Observable<Experience[]>;

  constructor() { }



  ngOnInit() {
  }


}

