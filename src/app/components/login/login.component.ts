import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  showAlert = false;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) {
                if (this.authenticationService.currentUserValue) {
                  this.router.navigate(['/']);
                }
               }

  ngOnInit() {
    this.returnUrl = this.route.queryParams['returnUrl'] || '/';
  }

  public seConnecter(form) {

    this.authenticationService.login(form.value.username, form.value.password).subscribe(date => {
      this.router.navigate([this.returnUrl]);
    }, err => {
      console.log(err);
      this.loading = false;
      this.showAlert = true;
    });
  }
}
