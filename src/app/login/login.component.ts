import { Router } from '@angular/router';
import { FireAuthService } from './../services/fire-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo: any = {}
  constructor(private fireAuth: FireAuthService, private _router: Router) { }

  ngOnInit(): void {
    // this.userInfo = localStorage.getItem(JSON.parse("user"))
    // console.log(this.userInfo)
  }

  handleLogin(data: any) {
    this.fireAuth.login(data.email, data.password).subscribe(() => {
      this.userInfo = this.fireAuth.userInfo;
      this._router.navigate(["/"])
    })
  }


}
