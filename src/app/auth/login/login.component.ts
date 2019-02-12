import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logingForm: FormGroup;

  constructor(private  authService: AuthService) { }

  ngOnInit() {
    this.logingForm = new FormGroup({email: new FormControl('', {validators: [ validators.required, validators.email]}),
    password: new FormControl('', {validators: [ validators.required.password]}),
    });
  }
onSubmit() {

    this.authService.login({ email: this.loginForm.value.email,
    password: this.logingForm.value.password
    });
   }
 }
