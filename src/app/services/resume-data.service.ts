import { Education } from './../models/Education';
import { Skill } from './../models/Skill';
import { Experience } from './../models/Experience';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ResumeDataService {

  constructor() { }

  /**
   * Return all job experiences
   */
  public getExperiences(): Observable<Experience[]> {
    // TODO: In the future we will retrieve this info from an Firebase API
    const result: Experience[] = [];
    let xp: Experience = {
      company: 'Schneider Electric',
      from: 'November 2011',
      to: 'Now',
      job: 'Software Engineer, frontend technical lead',
      highlights: [
        'Developed real time control applications for the Electric Business.',
        'Delivered software that supports several communication protocols (IEC 101, 104, MODBUS, IEC61850).',
        'Designed and developed a lightweight SCADA front-end for a real time back-end. (Angular 2 - 4)',
        'Worked in a multi OS environment. (Linux, Windows, VxWorks).'
      ]
    };
    result.push(xp as Experience);
    xp = {
      company: 'Stendhal Museum Solutions, S.L.',
      from: 'Jul 2011',
      to: 'Feb 2012',
      job: 'Software Architect',
      highlights: [
        'Redesign the architecture of the online ticket sales system.'
      ]
    };
    result.push(xp as Experience);
    xp = {
      company: 'Grupo Konecta',
      from: 'Nov 2009',
      to: 'Sep 2011',
      job: 'Full-stack .NET developer',
      highlights: [
        'Developed software for the telemarketing and banking sector.',
        'Technologies used: ASP.NET, Oracle, SQL Server'
      ]
    };
    result.push(xp as Experience);
    xp = {
      company: 'Coynet Systems SL',
      from: 'Nov 2008',
      to: 'Nov 2009',
      job: '.NET Software developer',
      highlights: [
        'Developed software for a public rental Bicycle system',
      ]
    };
    result.push(xp as Experience);

    return Observable.of(result);
  }

  public getSkills(): Observable<Skill[]> {
    // TODO: In the future we will retrieve this info from an Firebase API
    const result: Skill[] = [];
    let sk: Skill = {name: 'Angular [2-5]', percentage: 90};
    result.push(sk as Skill);
    sk = {name: 'C#', percentage: 90};
    result.push(sk as Skill);
    sk = {name: 'ASP.NET (Core)', percentage: 70};
    result.push(sk as Skill);
    sk = {name: 'AngularJS', percentage: 70};
    result.push(sk as Skill);
    sk = {name: 'GIT', percentage: 70};
    result.push(sk as Skill);
    sk = {name: 'Linux', percentage: 60};
    result.push(sk as Skill);
    sk = {name: 'Real time systems', percentage: 60};
    result.push(sk as Skill);
    return Observable.of(result);
  }

  public getEducation(): Observable<Education[]>{
    // TODO: In the future we will retrieve this info from an Firebase API
    const result: Education[] = [];
    let ed: Education = {name: 'Ingeniero técnico en informática de sistemas', year: 2008, institution: 'Universidad de sevilla'};
    result.push(ed as Education);

    return Observable.of(result);
  }

}
