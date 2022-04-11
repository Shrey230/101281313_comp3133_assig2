import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HotelServiceService {

  constructor(private http: HttpClient, private apollo: Apollo) {
  }


}
