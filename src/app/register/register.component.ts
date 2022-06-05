import { FireAuthService } from './../services/fire-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData: any = {}

  constructor(private firebase: FireAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister(data: any) {
    this.firebase.singUp(data.email, data.password, data.displayName).subscribe(() => {
      this.userData = this.firebase.userInfo;
      this.router.navigate(["/"])
    })
  }

}
