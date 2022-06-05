import { Router } from '@angular/router';
import { FireAuthService } from './../services/fire-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  stringifyUSer: any = "";
  userInfo!: any

  constructor(private firebase: FireAuthService, private router: Router) { }

  ngOnInit(): void {
    this.firebase.isLogged$
      .subscribe(res => {
        console.log(res)
        if (res) {
          this.isLogged = true;
          this.stringifyUSer = localStorage.getItem("user")
          this.userInfo = JSON.parse(this.stringifyUSer)
        }
        else {
          this.isLogged = false
        }
      })
    if (localStorage.getItem("user") !== null) {
      this.isLogged = true;
      this.stringifyUSer = localStorage.getItem("user")
      this.userInfo = JSON.parse(this.stringifyUSer)

    }
  }

  async handleLogout() {
    this.firebase.logout()
  }

}
