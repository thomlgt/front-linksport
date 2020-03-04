import { JoueurService } from './../../_services/joueur.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private joueurService: JoueurService) { }


  ngOnInit() {
  }

}
