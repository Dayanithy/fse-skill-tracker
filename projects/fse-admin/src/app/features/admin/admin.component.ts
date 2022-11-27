import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { IFseProfile } from '../../shared/IFseProfile';
import { AdminService } from './admin.service';

@Component({
  selector: 'fse-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  profiles$!: Observable<IFseProfile[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private adminService: AdminService) {

  }

  search(searchTerm: string): void {
    console.log(searchTerm);
    this.searchTerms.next(searchTerm);
  }


  ngOnInit(): void {

    this.profiles$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string) => this.adminService.searchProfiles(searchTerm)),
    );
  } 
}
