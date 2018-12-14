import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

import { UserLogin } from '../../core/models/user-login.model';
import { ParseService } from '../../core/services/parse.service';

import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation]
})
export class LoginComponent implements OnInit {

  public userLogin: UserLogin;
  public formResetToggle: boolean = true;
  public isShowErrors: boolean = false;

  @ViewChild('form')
  private form;

  constructor(private titleService: Title, private router: Router, private parseService: ParseService) {
    this.setTitle();
  }

  ngOnInit() {
    this.userLogin = new UserLogin();
  }

  onSignIn(form: NgForm) {
    this.isShowErrors = true;

    if (form.valid) {
      this.parseService.signIn(this.userLogin)
        .then((response) => {
          
          if (this.userLogin.isRememberMe) {
            if (localStorage.getItem('rememberMe')) {
              localStorage.removeItem('rememberMe');
            }
            localStorage.setItem('rememberMe', JSON.stringify(this.userLogin));
          }

          this.isShowErrors = false;
          this.resetForm();

          this.router.navigate(['/products']);
        })
        .catch((error) => {
          swal({
            title: 'Error',
            text: error,
            type: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#f25a5a',
            timer: 3000
          });
        });
    }
  }

  private resetForm(replace = false) {
    if (!replace) {
      this.form.reset();
    }
    else {
      this.formResetToggle = false;

      setTimeout(() => {
        this.formResetToggle = true;
      });
    }
  }

  private setTitle() {
    this.titleService.setTitle('Sign In');
  }
}
