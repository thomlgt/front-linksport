import { Publication } from './../_models/publication';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  /* Envoie publication */
  sendPub(publication: Publication) {
    return this.http.post<any>(`${environment.apiUrl}/pub/send`, publication);
  }

  /* Récupérer toutes les publications */
  public getAllPub() {
    return this.http.get(`${environment.apiUrl}/pub`);
  }

  /* Récupérer toutes les publications de cet user */
  public getAllPubUser(id: number) {
    return this.http.get(`${environment.apiUrl}/pub/current/${id}`);
  }
}
