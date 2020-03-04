import { JoueurService } from './../../_services/joueur.service';
import { CoachService } from './../../_services/coach.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ClubService } from 'src/app/_services/club.service';
import { Joueur } from 'src/app/_models/joueur';
import { Club } from './../../_models/club';
import { Coach } from 'src/app/_models/coach';

@Component({
    selector: 'app-choix-inscription',
    templateUrl: './choix-inscription.component.html',
    styleUrls: ['./choix-inscription.component.scss']
})
export class ChoixInscriptionComponent implements OnInit {
    closeResult: string;
    constructor(private modalService: NgbModal,
                private authenticationService: AuthenticationService,
                private coachService: CoachService,
                private clubService: ClubService,
                private joueurService: JoueurService,
                private parserFormatter: NgbDateParserFormatter
    ) {
    }

    isSportSelected = false;
    sportId: any;
    isValidate = false;

    /* ------------------------Liste des sports------------------------ */
    sports = [
        { id: 1, name: 'Football' },
        { id: 2, name: 'Basketball' },
        { id: 3, name: 'Handball' }
    ];

    /* ------------------------Liste des postes------------------------ */
    postes = [
        [],
        /* Football */
        [
            { id: 1, name: 'Gardien', sportId: 1 },
            { id: 2, name: 'Défenseur Central', sportId: 1 },
            { id: 3, name: 'Défenseur Gauche', sportId: 1 },
            { id: 4, name: 'Défenseur Droit', sportId: 1 },
            { id: 5, name: 'Milieu Défensif', sportId: 1 },
            { id: 6, name: 'Milieu Relayeur', sportId: 1 },
            { id: 7, name: 'Milieu Offensif', sportId: 1 },
            { id: 8, name: 'Milieu Droit', sportId: 1 },
            { id: 9, name: 'Milieu gauche', sportId: 1 },
            { id: 10, name: 'Buteur', sportId: 1 },
            { id: 11, name: 'Attaquant', sportId: 1 },
            { id: 12, name: 'Attaquant Droit', sportId: 1 },
            { id: 13, name: 'Attaquant Gauche', sportId: 1 }
        ],
        /* Basketball */
        [
            { id: 14, name: 'Meneur', sportId: 2 },
            { id: 15, name: 'Arrière', sportId: 2 },
            { id: 16, name: 'Ailier', sportId: 2 },
            { id: 17, name: 'Ailier Fort', sportId: 2 },
            { id: 18, name: 'Pivot', sportId: 2 }
        ],
        /* Handball */
        [
            { id: 19, name: 'Ailier Gauche', sportId: 3 },
            { id: 20, name: 'Ailier Droit', sportId: 3 },
            { id: 21, name: 'Arrière Gauche', sportId: 3 },
            { id: 22, name: 'Arrière Droit', sportId: 3 },
            { id: 23, name: 'Demi-centre', sportId: 3 },
            { id: 24, name: 'Pivot', sportId: 3 },
            { id: 25, name: 'Gardien', sportId: 3 }
        ]
    ];

    /* ------------------------Liste des niveaux------------------------ */
    niveaux = [
        [],
        /* Football */
        [
            { id: 1, name: 'Ligue 1', sportId: 1 },
            { id: 2, name: 'Ligue 2', sportId: 1 },
            { id: 3, name: 'National', sportId: 1 },
            { id: 4, name: 'National 2', sportId: 1 },
            { id: 5, name: 'National 3', sportId: 1 },
            { id: 6, name: 'Régional 1', sportId: 1 },
            { id: 7, name: 'Régional 2', sportId: 1 },
            { id: 8, name: 'Régional 3', sportId: 1 },
            { id: 9, name: 'Départemental 1', sportId: 1 },
            { id: 10, name: 'Départemental 2', sportId: 1 },
            { id: 11, name: 'Départemental 3', sportId: 1 },
            { id: 12, name: 'Départemental 4', sportId: 1 },
            { id: 13, name: 'Départemental 5', sportId: 1 }
        ],
        /* Basketball */
        [
            { id: 14, name: 'Pro A', sportId: 2 },
            { id: 15, name: 'pro B', sportId: 2 },
            { id: 16, name: 'National 1', sportId: 2 },
            { id: 17, name: 'National 2', sportId: 2 },
            { id: 18, name: 'National 3', sportId: 2 },
            { id: 19, name: 'Pré-national', sportId: 2 },
            { id: 20, name: 'Régional 2', sportId: 2 },
            { id: 21, name: 'Régional 3', sportId: 2 },
            { id: 22, name: 'Pré-régional', sportId: 2 },
            { id: 23, name: 'Départemental 2', sportId: 2 },
            { id: 24, name: 'Départemental 3', sportId: 2 },
        ],
        /* Handball */
        [
            { id: 25, name: 'Division 1 (Staligue)', sportId: 3 },
            { id: 26, name: 'Division 2 (Proligue)', sportId: 3 },
            { id: 27, name: 'National 1', sportId: 3 },
            { id: 28, name: 'National 2', sportId: 3 },
            { id: 29, name: 'National 3', sportId: 3 },
            { id: 30, name: 'Pré-national', sportId: 3 },
            { id: 31, name: 'Excellence Régional', sportId: 3 },
            { id: 32, name: 'Honneur Régional', sportId: 3 },
            { id: 33, name: 'Pré-régional', sportId: 3 },
            { id: 34, name: 'Excellence Départemental', sportId: 3 },
            { id: 35, name: 'Honneur Départemental', sportId: 3 }
        ]
    ];

    functionSport(s: any) {
        this.isSportSelected = true;
        this.sportId = s;
        return this.sportId;
    }

    submitJoueur(form: NgForm) {
        let joueur = new Joueur();
        joueur.username = form.value.username;
        joueur.email = form.value.email;
        joueur.password = form.value.password;
        joueur.phone = form.value.phone;
        joueur.birthDate = this.parserFormatter.format(form.value.birthDate);
        joueur.zipCode = form.value.zipCode;
        joueur.description = form.value.description;
        joueur.idLevel = form.value.idLevel;
        joueur.idSport = form.value.idSport;
        joueur.idPosition = form.value.idPosition;
        joueur.firstname = form.value.firstname;
        joueur.lastname = form.value.lastname;
        joueur.idGender = form.value.idGender;
        this.joueurService.signupJoueur(joueur).subscribe((res) => {
            console.log(res);
            this.isValidate = true;
        }, err => {
            console.log(err);
        });
    }

    submitCoach(form: NgForm) {
        let coach = new Coach();
        coach.username = form.value.username;
        coach.email = form.value.email;
        coach.password = form.value.password;
        coach.phone = form.value.phone;
        coach.birthDate = this.parserFormatter.format(form.value.birthDate);
        coach.zipCode = form.value.zipCode;
        coach.description = form.value.description;
        coach.idLevel = form.value.idLevel;
        coach.idSport = form.value.idSport;
        coach.firstname = form.value.firstname;
        coach.lastname = form.value.lastname;
        coach.idGender = form.value.idGender;
        this.coachService.signupCoach(coach).subscribe((res) => {
            console.log(res);
            this.isValidate = true;
        }, err => {
            console.log(err);
        });
    }

    submitClub(form: NgForm) {
        let club = new Club();
        club.username = form.value.username;
        club.name = form.value.name;
        club.email = form.value.email;
        club.password = form.value.password;
        club.phone = form.value.phone;
        club.creationDate = this.parserFormatter.format(form.value.birthDate);
        club.zipCode = form.value.zipCode;
        club.description = form.value.description;
        club.idLevel = form.value.idLevel;
        club.idSport = form.value.idSport;
        this.clubService.signupClub(club).subscribe((res) => {
            console.log(res);
            this.isValidate = true;
        }, err => {
            console.log(err);
        });
    }

    ngOnInit() {
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}
