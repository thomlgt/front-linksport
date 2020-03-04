import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8090/api/users/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
    private configService: ConfigService) { }

  // tslint:disable-next-line: new-parens

  public getAllUser() {
    return this.http.get(this.baseUrl);
  }

  public getUserById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  // tslint:disable-next-line: ban-types
  public updateProfil(id, contact) {
    return this.http.put<any>(`${environment.apiUrl}/update/${id}`, contact);
  }
}
