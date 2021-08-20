import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  {path : '', redirectTo : '/pages', pathMatch : 'full'},
  {path : 'pages', component : IndexComponent},
  {path : 'register', component : RegisterpageComponent},
  {path : 'landing', component: LandingComponent},
  {path : 'profile' , component : ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
