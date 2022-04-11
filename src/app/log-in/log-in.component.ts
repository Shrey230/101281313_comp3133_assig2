import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../services/auth.service';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

const q = gql`
  query GetLogin($username: String!, $password: String!) {
    getLogin(username: $username, password: $password) {
      _id
      username
      email
    }
  }
`;

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  user: any;

  constructor(private apollo: Apollo, private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const unm = form.value.usernameInput;
    const pwd = form.value.passwordInput;

    //console.log(unm + ' ' + pwd);
    this.apollo
      .query<any>({
        query: q,
        variables: {
          username: unm,
          password: pwd,
        },
      })
      .subscribe(({ data }) => {
        this.user = data.getLogin
        if (this.user != null) {
          this.authservice.login(true, this.user);
          this.router.navigate(['/dashboard']);
        }
      });
    //console.log('Form' + form.value);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
