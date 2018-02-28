import { ResumeDataService } from './../services/resume-data.service';
import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private resumeDataServ: ResumeDataService ) { }

  _name: String;
  _mail: String;

  public experiencesObs$;

  ngOnInit() {
    // Populate sensible information to avoid bots
    let aux = 'UmFmYWVs';
    let aux2 = 'IEfzbWV6';
    this._name = atob(aux + aux2);
    aux = 'cmFmYWVsLmdv';
    aux2 = 'bWV6QGdtYWlsLmNvbQ==';
    this._mail = atob(aux + aux2);

    this.experiencesObs$ = this.resumeDataServ.getExperiences();
  }

}
