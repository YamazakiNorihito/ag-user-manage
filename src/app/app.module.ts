import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';

import { SharedModule } from './shared/shared.module';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterpageComponent,
    LandingComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
