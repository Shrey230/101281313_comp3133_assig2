import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const m = gql`
  mutation AddUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
      _id
      username
      email
    }
  }
`;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  users: any[] = [];

  constructor(private apollo: Apollo) {}
  //TODO
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const unm = form.value.usernameInput;
    const eml = form.value.emailInput;
    const pwd = form.value.passwordInput;

    if(unm != "" && eml != "" && pwd != ""){
      this.apollo
      .mutate<any>({
        mutation: m,
        variables: {
          username: unm,
          email: eml,
          password: pwd,
        },
      })
      .subscribe(({ data }) => {
        console.log(data)
      });
    }else{
      alert("Textboxes cannot be blank")
    }

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
