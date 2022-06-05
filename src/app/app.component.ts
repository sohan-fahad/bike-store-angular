import { FireAuthService } from './services/fire-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bike-store';
  isLogged: boolean = false

  constructor(private firebase: FireAuthService) { }

  ngOnInit(): void {
  }
}
