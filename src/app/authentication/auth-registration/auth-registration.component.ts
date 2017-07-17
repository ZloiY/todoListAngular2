import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { User } from '../../core/user.model';

@Component({
  selector: 'app-auth-registration',
  templateUrl: 'auth-registration.component.html',
  styleUrls: ['auth-registration.component.scss']
})
export class AuthRegistrationComponent implements OnInit {

  private user: User;
  registrationForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.user = {login:'', pass:''};
    this.buildForm();
  }

  registration(login, password, repPass) {
    if (
      (this.formErrors.login || this.formErrors.pass || this.formErrors.repPass) ||
      (login.length === 0 || password.length === 0 || repPass.length === 0)
    ) {
      return;
    }
    this.user.login = login;
    this.user.pass = password;
    this.authService.registration(this.user)
      .subscribe(() => this.router.navigate(['/authentication'], {relativeTo: this.route}));
  }

  buildForm() {
    this.registrationForm = this.formBuilder.group({
      'login':['',
        [
          Validators.required,
          Validators.email,
        ]],
      'pass': ['',
        [
          Validators.required,
          Validators.minLength(4),
        ]],
      'repPass': ['',
        [
          Validators.required,
        ]],
    }, {validator: this.passCheck('pass', 'repPass')});

    this.registrationForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged()
  }

  passCheck(passKey: string, repPassKey: string) {
    return (form: FormGroup): {[key: string]: any} => {
      const password = form.controls[passKey];
      const repPassword = form.controls[repPassKey];
      if (password.value !== repPassword.value) {
        return {
          mismatchedPasswords: true,
        }
      }
    }
  }

  onValueChanged(data?: any) {
    if (!this.registrationForm) {
      return;
    }
    const form = this.registrationForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      this.controlCheck(control, field);
    }
  }

  controlCheck(control, field) {
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }

  formErrors = {
    'login': '',
    'pass': '',
    'repPass': '',
  };

  validationMessages = {
    'login': {
      'required':'Login is required.',
      'email': 'You must enter your email address',
    },
    'pass': {
      'required': 'Password is required.',
      'minlength': 'Password length must be more than 4 characters',
    },
    'repPass': {
      'required': 'You must repeat your password.',
    }
  };

}
