import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VodicComponent } from './components/vodic/vodic.component';
import { MaterijaliInfoComponent } from './components/materijali-info/materijali-info.component';

const routes: Routes = [
  {path:'home' ,component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'vodic',component:VodicComponent},
  {path:'materijali-info',component:MaterijaliInfoComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

