import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {environment} from './environments/environments';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { HomeComponent } from './home/home.component';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizItemComponent } from './quiz/quiz-list/quiz-item/quiz-item.component';
import { QuizWalkthroughComponent } from './quiz/quiz-walkthrough/quiz-walkthrough.component';
import { QuizQuestionComponent } from './quiz/quiz-walkthrough/quiz-question/quiz-question.component';
import { ResultComponent } from './quiz/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuizListComponent,
    QuizItemComponent,
    QuizWalkthroughComponent,
    QuizQuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
