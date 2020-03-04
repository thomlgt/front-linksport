import { Coach } from './../_models/coach';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http: HttpClient) { }

  /* Inscription Coach */
  signupCoach(coach: Coach) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup/coach`, coach);
  }

 /*  getAllCoach(): Observable<User[]> {
    return this.http.get<User[]>(this.backUrl);
  }

  postCoach(user: User) {
    this.http.post(this.backUrl, user);
  } */
}
/*
class FakeComp {
  private list:User[];

  constructor(private service:CoachService){
    service.getAllCoach().subscribe(
      data => {
        this.list = data;
      },
      err => {
        alert(err);
      }
    );
  }
}*/