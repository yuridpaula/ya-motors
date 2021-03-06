import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ngComponents } from "./ng.components";


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AccessComponent } from './access/access.component';
import { BannerComponent } from './access/banner/banner.component';
import { SignInComponent } from './access/sign-in/sign-in.component';
import { SignUpComponent } from './access/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    ngComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
