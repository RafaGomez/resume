import { ResumeDataService } from './../services/resume-data.service';
import { Skill } from './../models/Skill';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills$: Observable<Skill[]>;
  constructor(private dataServ: ResumeDataService) { }

  ngOnInit() {
    this.skills$ = this.dataServ.getSkills();
  }

}
