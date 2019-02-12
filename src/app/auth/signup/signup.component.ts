import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private  authService: AuthService) { }

  ngOnInit() {}
  onSubmit(form: NgForm) {
    this.authService.registerUser({email: form.value.Email, password: form.value.Password, firstName: form.value.firstName,
      lastName: form.value.lastName
    });
  }
}
