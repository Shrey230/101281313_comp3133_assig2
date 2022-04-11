import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable}  from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  title = "Hotels"
  sideList = 0

  constructor(private apollo: Apollo, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {

  }

  onClick(tab: any){
    switch(tab){
      //For hotels
      case 0:
        this.sideList = 0;
        this.title = "Hotels"
        break;
      //For bookings
      case 1:
        this.sideList = 1;
        this.title = "My Bookings"
        break;
      case 2:
        this.sideList = 2;
        this.title = "Profile"
    }
    console.log(this.sideList)
  }

  onLogout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
