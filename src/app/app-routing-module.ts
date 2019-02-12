import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {ContactInfoComponent} from './contact/contact-info/contact-info.component';
import {DriverloginComponent} from './driverauth/driverlogin/driverlogin.component';
import {DriversignupComponent} from './driverauth/driversignup/driversignup.component';
import {FAQInfoComponent} from './FAQ/faqinfo/faqinfo.component';
import {ChatComponent} from './Support/chat/chat.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact-info', component: ContactInfoComponent},
  {path: 'driverlogin', component: DriverloginComponent},
  {path: 'driversignup', component: DriversignupComponent},
  {path: 'faqinfo', component: FAQInfoComponent},
  {path: 'chat', component: ChatComponent},



]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
