import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';

import { SharedModule } from './shared/shared.module';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterpageComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
