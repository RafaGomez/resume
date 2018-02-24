import { Observable } from 'rxjs/Observable';
import { Education } from './../models/Education';
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  private education$: Observable<Education[]>;

  constructor( private dataServ: ResumeDataService) { }

  ngOnInit() {
    this.education$ = this.dataServ.getEducation();
  }

}
