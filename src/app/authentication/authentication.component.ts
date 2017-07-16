import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from './authentication.service';
import { User } from '../core/user.model';

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

  ngOnInit() {
    this.user = {login:'', pass:''};
    this.buildForm();
  }

  logging(login, password) {
    if (this.formErrors.pass && this.formErrors.login) {
      return;
    }
    this.user.login = login;
    this.user.pass = password;
    this.authService.authentication(this.user)
      .subscribe(() => this.router.navigate(['/todolist'], {relativeTo: this.route}));
  }

  registration() {
    this.router.navigate(['/registration'], {relativeTo: this.route})
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      'login':['',
        [
          Validators.required,
          Validators.email,
        ]],
      'pass':['',
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
  };

  validationMessages = {
    'login': {
      'required':'Login is required.',
      'email': 'You must enter your email address',
    },
    'pass': {
      'required': 'Password is required.',
      'minlength': 'Password length must be more than 4 characters',
    }
  };
}
