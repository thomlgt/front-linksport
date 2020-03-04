import { PublicationService } from 'src/app/_services/publication.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { JoueurService } from 'src/app/_services/joueur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public isCollapsed = false;

  constructor(private authenticationService: AuthenticationService,
              private publication: PublicationService,
              private joueurService: JoueurService) { }

  userId = JSON.parse(localStorage.getItem('currentUser')).user.id;
  pubList: any;
  user: any;
  imgUrl = '../../assets/images/';

  ngOnInit() {
    this.joueurService.getJoueurById(this.userId).subscribe(res => {
      this.user = res;
      this.imgUrl = `${this.imgUrl}${this.user.avatar}`;
    }, err => {
      console.log(err);
    });
  }

}
