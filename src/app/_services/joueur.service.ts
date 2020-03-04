import { Joueur } from './../_models/joueur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http: HttpClient) { }

  /* Inscription Joueur */
  signupJoueur(joueur: Joueur) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup/player`, joueur);
  }

  public getJoueurById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  public getJoueurBySport(sport: number) {
    return this.http.get(`${environment.apiUrl}/users/suggestion/${sport}`);
  }
}
