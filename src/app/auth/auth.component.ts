import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequest } from '../dtos/AuthRequest';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private storageService: LocalStorageService,
    private router: Router
  ) {}

  authForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get formControls() {
    return this.authForm.controls;
  }

  signIn() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    var request = new AuthRequest();
    request = this.authForm.value;
    this.authService
    .authenticate(request)
    .subscribe((res) => {
      this.storageService.save('token', res.token);
      this.router.navigateByUrl('/diary');
    });
  }

  authenticate() {}
}
