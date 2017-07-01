import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from './authentication.service';
import { User } from './user';

@Component({
  selector: 'authentication',
  templateUrl: 'authentication.component.html',
  styleUrls: ['authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  private user: User;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) {}


  logging(login, password) {
    this.user.login = login;
    this.user.pass = password;
    if (this.formErrors.pass && this.formErrors.login) {
      return;
    }
    this.authService.authentication(this.user)
      .then(() => this.router.navigate(['./complete'], {relativeTo: this.route}));
  }

  registration() {
    this.router.navigate(['/registration'], {relativeTo: this.route})
  }

  ngOnInit() {
    this.user = {login:'', pass:''};
    this.buildForm();
  }


  buildForm() {
    this.userForm = this.formBuilder.group({
      'login':[this.user.login,
        [
          Validators.required,
          Validators.pattern(/\w+@[a-z]+\.[a-z]+/g),
        ]],
      'pass':[this.user.pass,
        [
          Validators.required,
          Validators.minLength(4),
        ]]
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged()
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'login': '',
    'pass': '',
  };

  validationMessages = {
    'login': {
      'required':'Login is required.',
      'pattern': 'You must enter your email address',
    },
    'pass': {
      'required': 'Password is required.',
      'minlength': 'Password length must be more than 4 characters',
    }
  };
}
