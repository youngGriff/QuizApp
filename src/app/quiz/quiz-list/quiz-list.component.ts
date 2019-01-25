import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuizService} from '../quiz.service';
import {Quiz} from '../../shared/quiz.model';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit, OnDestroy {
  quizList: Quiz[];
  subscription: Subscription;

  constructor(private quizService: QuizService,
              private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.subscription = this.quizService.getQuizList().subscribe((quizzes) => {
      this.quizList = quizzes;
      this.spinnerService.hide();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
