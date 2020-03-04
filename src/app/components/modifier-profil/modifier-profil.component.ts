import { ModifUser } from './../../_models/modif-user';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { PublicationService } from 'src/app/_services/publication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.scss']
})
export class ModifierProfilComponent implements OnInit {

  public isCollapsed = false;

  constructor(private authenticationService: AuthenticationService,
              private publication: PublicationService,
              private userService: UserService,
              private router: Router) { }

  user = JSON.parse(localStorage.getItem('currentUser'));
  pubList: any;

  ngOnInit() {
    this.publication.getAllPubUser(this.user.user.id).subscribe(res => {
      /* console.log(res); */
      this.pubList = res;
    }, err => {
      console.log(err);
    });
  }

  submitModif(form: NgForm) {
    let contact = new ModifUser();
    contact.id = this.user.user.id;
    contact.description = form.value.description;
    contact.email = form.value.email;
    contact.phone = form.value.phone;
    contact.zipCode = form.value.zipCode;
    this.userService.updateProfil(this.user.user.id, contact).subscribe((res) => {
      this.router.navigate(["profil"]);
    }, err => {
        console.log(err);
    });
  }
}
