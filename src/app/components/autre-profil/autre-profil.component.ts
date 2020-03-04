import { ClubService } from './../../_services/club.service';
import { CoachService } from './../../_services/coach.service';
import { JoueurService } from './../../_services/joueur.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autre-profil',
  templateUrl: './autre-profil.component.html',
  styleUrls: ['./autre-profil.component.scss']
})
export class AutreProfilComponent implements OnInit {

  user: any;
  userId: number;
  imgUrl = '../../assets/images/';

  constructor(private joueurService: JoueurService,
              private coachService: CoachService,
              private clubService: ClubService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.joueurService.getJoueurById(this.userId).subscribe(res => {
      this.user = res;
      this.imgUrl = `${this.imgUrl}${this.user.avatar}`;
    }, err => {
      console.log(err);
    });
  }

}
