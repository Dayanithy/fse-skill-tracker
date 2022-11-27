import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap } from 'rxjs';

import { IFseProfile } from '../../shared/IFseProfile';
import { IFseSkill } from '../../shared/IFseSkill';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  fseSkills: IFseSkill[] = [
    { SkillName: 'Angular', IsTechnical: true, Proficiency: 20 },
    { SkillName: 'React', IsTechnical: true, Proficiency: 20 },
    { SkillName: 'Communication', IsTechnical: false, Proficiency: 20 },
    { SkillName: 'Aptitude', IsTechnical: false, Proficiency: 20 }
  ];

  fseProfiles: IFseProfile[] = [
    { Name: 'Daya Mani', Email: 'dmani@cognizant.com', AssociateId: 'CTS123465', Mobile: 5658411584, Skills: this.fseSkills },
    { Name: 'John Doe', Email: 'jdoe@cognizant.com', AssociateId: 'CTS874548', Mobile: 9874564512, Skills: this.fseSkills }
  ];

  getFseProfiles(): Observable<IFseProfile[]> {
    const profiles = of(this.fseProfiles);

    return profiles;
  }

  searchProfiles(searchTerm: string) : Observable<IFseProfile[]> {
    if(!searchTerm.trim()) {
      return of([]);
    }

    const profiles = of(this.fseProfiles);

    return profiles;
    
    // return this.http.get<IFseProfile[]>(`${this.heroesUrl}/?name=${searchTerm}`).pipe(
    //   tap(x => x.length ?
    //      this.log(`found heroes matching "${searchTerm}"`) :
    //      this.log(`no heroes matching "${searchTerm}"`)),
    //   catchError(this.handleError<IFseProfile[]>('searchHeroes', []))
    // );

  }
}
