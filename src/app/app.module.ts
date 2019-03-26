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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {AuthService} from './auth/auth.service';
import {MapsComponent} from "./maps/maps.component";
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import {CommonModule} from "@angular/common";
import {AgmDirectionModule} from "agm-direction";
import {MapsService} from "./maps/maps.service";
import {HttpClientModule} from "@angular/common/http";
import {DemoComponent} from "./demo/demo.component";
import {DemoService} from "./demo/demo.service";

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
    SidenavListComponent,
    MapsComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
      libraries: ["places", "geometry"]
    }),
    AgmDirectionModule,
    HttpClientModule
  ],
  providers: [AuthService,
              GoogleMapsAPIWrapper,
              MapsService,
              DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
