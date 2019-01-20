import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {RegisterPageComponent} from './auth/register-page/register-page.component';
import {AuthGuard} from './auth/auth.guard';
import {QuizWalkthroughComponent} from './quiz/quiz-walkthrough/quiz-walkthrough.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ResultComponent} from './quiz/result/result.component';
import {QuizListComponent} from './quiz/quiz-list/quiz-list.component';

const routes: Routes = [
  {path: '', component: QuizListComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  {path: 'quiz/:id', canActivate: [AuthGuard], component: QuizWalkthroughComponent},
  {path: 'results/:id', canActivate: [AuthGuard], component: ResultComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
