import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  authError: string;

  constructor(private authService: AuthService,
              private spinnerService: Ng4LoadingSpinnerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.spinnerService.show();
    this.authService.doEmailLogin(f.value['email'], f.value['password'])
      .finally(() => {
        this.spinnerService.hide();
      })
      .then(() => {
        this.authError = null;
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.authError = err;
      });
  }
  googleSignIn() {
    this.spinnerService.show();
    this.authService.doGoogleLogin()
      .finally(() => {
        this.spinnerService.hide();
      })
      .then(() => {
        this.router.navigate(['/']);
      });
  }
}
