import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  @ViewChild('repeatPassword') repeatPassword;
  authError: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
        email: new FormControl(null,
          [Validators.required,
            Validators.maxLength(100),
            Validators.email]),
        password: new FormControl(null,
          [Validators.required,
            Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,100}$/)]),
        repeatPassword: new FormControl(null,
          [Validators.required])
      }, {
        validator: this.MatchPassword
      }
    )
    ;
  }

  MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('repeatPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('repeatPassword').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }

  onSubmit() {
    console.log(this.registerForm);
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.spinnerService.show();
    this.authService
      .doEmailRegister(email, password)
      .then(() => this.router.navigate(['/']))
      .catch((error) => this.authError = error)
      .finally(() => this.spinnerService.hide());
  }
}
