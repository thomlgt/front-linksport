import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  public seConnecterAdmin(form) {

    this.authenticationService.login(form.value.username, form.value.password).subscribe(date => {
      this.router.navigate(["/admin"]);
    }, err => {
      console.log(err);
    });
  }
}
