import { Club } from './../_models/club';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) { }

  /* Inscription Club */
  signupClub(club: Club) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup/team`, club);
  }
}
