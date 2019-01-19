import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private isLogged = false;

  constructor(private authService: AuthService,
              private spinnerService: Ng4LoadingSpinnerService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.authService.isLoggedIn$.subscribe(
      (isLogged) => this.isLogged = isLogged
    );

  }

  onLoggedOut() {
    this.spinnerService.show();
    this.authService.logout()
      .finally(() => {
        this.spinnerService.hide();
      })
      .catch(() => this.router.navigate(['/login'])
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
