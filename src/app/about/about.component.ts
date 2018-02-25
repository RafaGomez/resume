import { Technology } from './../models/Technology';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  technologies$: Observable<Technology[]>;

  constructor(private dataServ: ResumeDataService) { }

  ngOnInit() {
    this.technologies$ = this.dataServ.getTecnologies();
  }

}
