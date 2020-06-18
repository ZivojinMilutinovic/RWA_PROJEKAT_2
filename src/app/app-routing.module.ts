import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VodicComponent } from './components/vodic/vodic.component';
import { MaterijaliInfoComponent } from './components/materijali-info/materijali-info.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AuthGuard } from './guards/auth.guard';
import { NapraviBlanketComponent } from './components/napravi-blanket/napravi-blanket.component';
import { MojiBlanketiComponent } from './components/moji-blanketi/moji-blanketi.component';
import { BazaBlanketaComponent } from './components/baza-blanketa/baza-blanketa.component';
import { KomentarisiBlanketComponent } from './components/komentarisi-blanket/komentarisi-blanket.component';

const routes: Routes = [
  {path:'home' ,component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'vodic',component:VodicComponent},
  {path:'materijali-info',component:MaterijaliInfoComponent},
  {path:'manage-users',component:ManageUsersComponent,canActivate:[AuthGuard]},
  {path:'napravi-blanket',component:NapraviBlanketComponent},
  {path:'moji-blanketi',component:MojiBlanketiComponent},
  {path:'baza-blanketa',component:BazaBlanketaComponent},
  {path:'komentarisi-blanket',component:KomentarisiBlanketComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

