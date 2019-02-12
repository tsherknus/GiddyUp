import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DriverloginComponent } from './driverauth/driverlogin/driverlogin.component';
import { DriversignupComponent } from './driverauth/driversignup/driversignup.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { FAQInfoComponent } from './FAQ/faqinfo/faqinfo.component';
import { ChatComponent } from './Support/chat/chat.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DriverloginComponent,
    DriversignupComponent,
    ContactInfoComponent,
    FAQInfoComponent,
    ChatComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
