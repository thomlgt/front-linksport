import { JoueurService } from './../../_services/joueur.service';
import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/_services/publication.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication-profil',
  templateUrl: './publication-profil.component.html',
  styleUrls: ['./publication-profil.component.scss']
})
export class PublicationProfilComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private publication: PublicationService,
    private route: ActivatedRoute,
    private joueurService: JoueurService) { }

  /* user = JSON.parse(localStorage.getItem('currentUser')); */
  pubList: any;
  user: any;
  userId: number;
  imgUrl = '../../assets/images/';

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.joueurService.getJoueurById(this.userId).subscribe(res => {
      this.user = res;
    }, err => {
      console.log(err);
    });

    this.publication.getAllPubUser(this.userId).subscribe(res => {
      this.pubList = res;
    }, err => {
      console.log(err);
    });
  }
}

