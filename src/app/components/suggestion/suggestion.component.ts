import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JoueurService } from 'src/app/_services/joueur.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private joueurService: JoueurService,
              private router: Router) { }

  userList: any;
  current = JSON.parse(localStorage.getItem('currentUser'));
  imgUrl = '../../assets/images/';

  ngOnInit() {
    this.joueurService.getJoueurBySport(this.current.user.sport.id).subscribe(res => {
      this.userList = res;
    }, err => {
      console.log(err);
    });
  }

  goToProfile(id: number) {
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
      this.router.navigateByUrl("/user/" + id));
  }

}
