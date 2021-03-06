import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/components/services/auth.service';
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

  constructor(
    private route: Router,
    private auth: AuthService
  ) { }

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

    this.auth.login(user).subscribe(() => {
      this.loginForm.reset();
      this.route.navigate(['admin', 'dashboard']);
    })
  }

}
