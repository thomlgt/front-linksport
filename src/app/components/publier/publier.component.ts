import { PublicationComponent } from './../publication/publication.component';
import { PublicationService } from './../../_services/publication.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Publication } from 'src/app/_models/publication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publier',
  templateUrl: './publier.component.html',
  styleUrls: ['./publier.component.scss']
})
export class PublierComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private publicationService: PublicationService,
              private router: Router) { }

  user = JSON.parse(localStorage.getItem('currentUser'));
  isPubliate = false;

  ngOnInit() {
  }

  submitPub(form) {
    const publication = new Publication();
    publication.body = form.value.body;
    publication.sender = this.user.user.username;
    this.publicationService.sendPub(publication).subscribe((res) => {
      /* window.location.reload(); */
      this.isPubliate = true;
      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
        this.router.navigate(["accueil"]));
    }, err => {
      console.log(err);
    });
  }
}
