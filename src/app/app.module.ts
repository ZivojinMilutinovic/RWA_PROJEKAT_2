import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule, Store} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { effects } from './effects/effects';
import { reducers } from './actions/actions';
import { HomeComponent } from './components/home/home.component';
import { VodicComponent } from './components/vodic/vodic.component';
import { MaterijaliInfoComponent } from './components/materijali-info/materijali-info.component';
import { AlertComponent } from './components/alert/alert.component';



//Mozda neka komponeneta nije ubacena u niz posto ima dva modula
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VodicComponent,
    VodicComponent,
    MaterijaliInfoComponent,
    AlertComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicijalizacija firebase u nasoj aplikaciji

    AppRoutingModule    //inicijalizacija rutiranja u nasoj aplikaciji
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
