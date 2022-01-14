import { Component, OnInit } from '@angular/core';
import { AuthRequest } from '../dtos/AuthRequest';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
  }

  authenticate(){
    this.authService
    .authenticate(new AuthRequest())
    .subscribe(res => {

    })
  }
}
