import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

import { fadeInAnimation } from '../../shared/animations/fade-in.animation';
import { MOBILE_PATTERN } from '../../shared/static/constants';

import { UserRegister } from '../../core/models/user-register.model';
import { ParseService } from '../../core/services/parse.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeInAnimation]
})
export class RegisterComponent implements OnInit, AfterViewInit {

  public userRegister: UserRegister;
  public formResetToggle: boolean = true;
  public isShowErrors: boolean = false;
  public mobilePattern: string;

  @ViewChild('form')
  private form;

  constructor(private titleService: Title, private router: Router, private parseService: ParseService) {
    this.setTitle();
  }

  ngOnInit() {
    this.userRegister = new UserRegister();
    this.mobilePattern = MOBILE_PATTERN;
  }

  ngAfterViewInit() {
    let self = this;

    $('#success-message').css('display', 'none');
    $('#error-message').css('display', 'none');

    $('#inputFile').on('change', function () {
      let fileExtension = this.files[0].name.split('.')[1];

      if (fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension == 'png' || fileExtension == 'gif') {
        $('#fakeFileValue').val(this.files[0].name);

        self.parseService.uploadProfilePicture(this.files[0].name, this.files[0])
          .subscribe(parseFile => {

            self.userRegister.profilePictureUrl = JSON.parse(JSON.stringify(parseFile)).url;
            $('#success-message').css('display', 'block');
            $('#error-message').css('display', 'none');

          }, error => {

            $('#success-message').css('display', 'none');
            $('#error-message').css('display', 'block');

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
      else {
        swal({
          title: 'Error',
          text: 'Please upload only valid image file.',
          type: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#f25a5a',
          timer: 3000
        });
      }

    });
  }

  onSignUp(form: NgForm) {
    this.isShowErrors = true;

    if (form.valid) {

      this.parseService.signUp(this.userRegister)
        .subscribe(parseUser => {

          if (parseUser != null && parseUser != undefined) {

            swal({
              title: 'Success',
              text: 'You are successfully signed up',
              type: 'success',
              showConfirmButton: true,
              confirmButtonText: 'Ok',
              confirmButtonColor: '#28a745'
            }).then((result) => {
              if (result.value) {
                this.isShowErrors = false;
                this.resetForm();
                this.router.navigate(['/products']);
              }
            });

          }
        }, error => {
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
    this.titleService.setTitle('Sign Up');
  }
}
