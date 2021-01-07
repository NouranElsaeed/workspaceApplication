import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ShowAllComponent } from './pages/workspace/show-all/show-all.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'workspaces', component:ShowAllComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'logIn', component:LoginComponent},
  {path:'profile/:id', component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
