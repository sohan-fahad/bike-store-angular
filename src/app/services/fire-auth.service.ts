import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from '@firebase/auth';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  isLogged: boolean = false;
  userInfo: any = {}
  private updateState = new Subject<boolean>();
  isLogged$ = this.updateState.asObservable()
  stringifyUser: any;
  localUser: any = {}


  constructor(public auth: Auth, private _http: HttpClient) {
    if (localStorage.getItem("user") !== null) {
      this.updateState.next(true);
      this.isLogged = true
    }
  }

  saveUser(displayName: string, email: string) {
    console.log(displayName)
    const userData = { displayName, email }
    return this._http.post('https://secret-ocean-30546.herokuapp.com/users', userData).pipe(map(res => console.log(res)))
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password).then((res: any) => {
      if (res.user) {
        this.isLogged = true;
        this.userInfo = res.user;
        localStorage.setItem("user", JSON.stringify(res.user))
        this.updateState.next(true)
      }
    }))
  }

  singUp(email: string, password: string, name: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password).then((res: any) => {
      if (res.user) {
        const _user = res.user;
        updateProfile(res.user, { displayName: name }).then(res => {
          this.saveUser(name, email);
          this.userInfo = _user;
          this.isLogged = true;
          localStorage.setItem("user", JSON.stringify(_user))
          this.updateState.next(true)
        })
      }
    }))
  }

  logout() {
    return from(signOut(this.auth).then(res => {
      this.isLogged = false;
      this.updateState.next(false)
      console.log(this.updateState)
      localStorage.removeItem("user")
    }))
  }
}
