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
    let result: Experience[] = [];
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
    result.push(xp as Experience);
    result.push(xp as Experience);
    result.push(xp as Experience);

    return Observable.of(result);
  }

}
