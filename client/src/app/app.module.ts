import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
// import { HomeComponent } from './components/home/home.component';
import { HomeComponent } from './components/home/home/home.component';
import { SigninComponent } from './components/home/signin/signin.component';
import { SignupComponent } from './components/home/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
