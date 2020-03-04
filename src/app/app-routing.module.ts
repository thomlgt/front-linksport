import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationComponent } from './components/publication/publication.component';
import { ModifierProfilComponent } from './components/modifier-profil/modifier-profil.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MenuComponent } from './components/menu/menu.component';
import { CoachInscriptionComponent } from './components/coach-inscription/coach-inscription.component';
import { ClubInscriptionComponent } from './components/club-inscription/club-inscription.component';
import { JoueurInscriptionComponent } from './components/joueur-inscription/joueur-inscription.component';
import { ChoixInscriptionComponent } from './components/choix-inscription/choix-inscription.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { PageIntrouvableComponent } from './components/page-introuvable/page-introuvable.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { AutreProfilComponent } from './components/autre-profil/autre-profil.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';



const routes: Routes = [
  { path : '' , pathMatch : 'full' , redirectTo : '/accueil'},
  { path : 'refresh' , component : RefreshComponent},
  { path : 'login', component : LoginComponent },
  { path : 'choix-inscription', component : ChoixInscriptionComponent },
  { path : 'joueur-inscription', component : JoueurInscriptionComponent},
  { path : 'coach-inscription', component : CoachInscriptionComponent },
  { path : 'club-inscription', component : ClubInscriptionComponent },
  { path : 'adminlog', component : AdminLoginComponent },
  { path : 'admin', component : AdminComponent, canActivate: [AuthGuardService] },
  { path : 'profil', component : ProfilComponent, canActivate: [AuthGuardService] },
  { path : 'user/:id', component : AutreProfilComponent, canActivate: [AuthGuardService] },
  { path : 'profil/modifier', component : ModifierProfilComponent, canActivate: [AuthGuardService] },
  { path : 'publication', component : PublicationComponent, canActivate: [AuthGuardService] },
  { path : 'rechercher', component : RechercheComponent, canActivate: [AuthGuardService] },
  { path : 'accueil', component : AccueilComponent, canActivate: [AuthGuardService] },
  { path : 'messages', component : MessagesComponent, canActivate: [AuthGuardService] },
  { path : 'notifications', component : NotificationsComponent, canActivate: [AuthGuardService] },
  { path : '**', component: PageIntrouvableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
