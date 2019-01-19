import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {RegisterPageComponent} from './auth/register-page/register-page.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {QuizWalkthroughComponent} from './quiz/quiz-walkthrough/quiz-walkthrough.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  {path: 'quiz/:id', component: QuizWalkthroughComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
