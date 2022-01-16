import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(public authService: RegisterService,
    private formBuilder: FormBuilder,
    private storageService: LocalStorageService,
    private router: Router) { }
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

  signUp(){

  }

}
