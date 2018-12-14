import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

import { ResetPassword } from './../../../core/models/reset-password.model';
import { ParseService } from './../../../core/services/parse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  resetPassword: ResetPassword;
  currentUser: any = null;

  formResetToggle: boolean = true;
  
  @ViewChild('form')
  private form;

  constructor(private router: Router, private parseService: ParseService) {

    if (localStorage.key(0) != null || localStorage.key(0) != undefined && localStorage.key(0).indexOf('Parse') >= 0) {
      if (localStorage.getItem(localStorage.key(0)) != null || localStorage.getItem(localStorage.key(0)) != undefined) {
        this.currentUser = JSON.parse(localStorage.getItem(localStorage.key(0)));
      }
    }

  }

  ngOnInit() {
    this.resetPassword = new ResetPassword();
  }

  onLogout() {

    this.parseService.logOut()
      .then((response) => {

        if (localStorage.key(0) != null || localStorage.key(0) != undefined && localStorage.key(0).indexOf('Parse') >= 0) {
            if (localStorage.getItem(localStorage.key(0)) != null || localStorage.getItem(localStorage.key(0)) != undefined) {
            localStorage.removeItem(localStorage.key(0));
          }
        }

        this.router.navigate(['/login']);
      })
      .catch((error) => {
        swal({
          title: 'Error',
          text: error,
          type: 'error',
          showConfirmButton: true,
          confirmButtonText: 'ok',
          confirmButtonColor: '#f25a5a',
          timer: 3000
        });
      });

  }

  onReset(form: NgForm) {

    if (form.valid) {
      this.parseService.resetPassword(this.resetPassword.email)
        .then((response) => {

          this.resetForm();
          this.onLogout();
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

}
