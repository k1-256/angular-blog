import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../interfaces/user.interface'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor() { }

  ngOnInit() {
  }


  onSubmit($event) {
    console.log('beautiful');
    console.log($event);

    const user: IUser = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }

    console.log(user);
  }

}
