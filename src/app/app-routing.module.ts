import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  {path: '',component:NavbarComponent},
  {path: 'login',component:LoginComponent},
  {path: 'about',component:AboutusComponent},
  {path: 'contact',component:LoginComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
