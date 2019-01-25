import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../shared/quiz.model';
import {QuizService} from '../quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultService} from '../result.service';
import {Observable, Subscription} from 'rxjs';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-quiz-walkthrough',
  templateUrl: './quiz-walkthrough.component.html',
  styleUrls: ['./quiz-walkthrough.component.scss']
})
export class QuizWalkthroughComponent implements OnInit {

  quiz: Quiz;
  subscription: Subscription;

  constructor(private quizService: QuizService,
              private resultService: ResultService,
              private router: Router,
              private spinnerService: Ng4LoadingSpinnerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const quiz$ = this.quizService.getQuizById(id);
    this.spinnerService.show();
    this.subscription = quiz$.subscribe((quiz) => {
      this.quiz = quiz;
      this.resultService.startQuiz(this.quiz);
      this.spinnerService.hide();

    });
  }

  onSubmit() {
    const resultId = this.resultService.finishQuiz();
    this.router.navigate(['/results', resultId], {});
  }
}
