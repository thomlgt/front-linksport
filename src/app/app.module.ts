import { NgModule } from '@angular/core';
import { NgbModule, NgbModalModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PublierComponent } from './components/publier/publier.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/JwtInterceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AuthGuardService } from './_services/auth-guard.service';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { AutreProfilComponent } from './components/autre-profil/autre-profil.component';
import { CarteRechercheComponent } from './components/carte-recherche/carte-recherche.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { PublicationProfilComponent } from './components/publication-profil/publication-profil.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ChoixInscriptionComponent,
    JoueurInscriptionComponent,
    CoachInscriptionComponent,
    ClubInscriptionComponent,
    MenuComponent,
    ProfilComponent,
    ModifierProfilComponent,
    PublicationComponent,
    RechercheComponent,
    LoginComponent,
    PageIntrouvableComponent,
    SuggestionsComponent,
    SidemenuComponent,
    MessageComponent,
    MessagesComponent,
    NotificationsComponent,
    NotificationComponent,
    PublierComponent,
    SuggestionComponent,
    FooterComponent,
    AutreProfilComponent,
    CarteRechercheComponent,
    RefreshComponent,
    PublicationProfilComponent,
    AdminLoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
