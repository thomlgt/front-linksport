import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/_services/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  pubList: any;
  imgUrl = '../../assets/images/';

  constructor(private publicationService: PublicationService,
              private router: Router) { }

  ngOnInit() {
    this.publicationService.getAllPub().subscribe(res => {
      /* console.log(res); */
      this.pubList = res;
      /* console.log(this.pubList); */
    }, err => {
      console.log(err);
    });
  }

  goToProfile(id: number) {
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
      this.router.navigateByUrl("/user/" + id));
  }

}
