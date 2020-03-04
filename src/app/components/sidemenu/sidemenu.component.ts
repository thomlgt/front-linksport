import { JoueurService } from './../../_services/joueur.service';
import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private joueurService: JoueurService) { }

              userId = JSON.parse(localStorage.getItem('currentUser')).user.id;
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

  seDeconnecter() {
    this.authenticationService.logout();
  }

}
