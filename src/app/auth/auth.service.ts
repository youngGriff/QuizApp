import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import AuthProvider = firebase.auth.AuthProvider;
import * as firebase from 'firebase/app';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: Observable<firebase.User>;
  private userDetails: firebase.User = null;
   isLoggedIn$: Observable<boolean>;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user$ = _firebaseAuth.authState;
    this.user$.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
    this.isLoggedIn$ = this.user$.pipe(
      map((item) => item !== null)
    );
  }

  doFacebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.login(provider);
  }

  doEmailRegister(email: string, password: string) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  doEmailLogin(email: string, password: string) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.login(provider);
  }

  private login(provider: AuthProvider) {
    return this._firebaseAuth.auth.signInWithPopup(provider);
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    return this._firebaseAuth.auth.signOut();
  }
}

