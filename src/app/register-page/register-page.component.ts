import {Component, OnInit, ViewChild,} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  @ViewChild('repeatPassword') repeatPassword;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
        email: new FormControl(null, [Validators.required, Validators.email]),
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
    console.log(this.repeatPassword.nativeElement.value);
  }
}
