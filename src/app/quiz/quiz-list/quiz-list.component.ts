import {Component, OnInit} from '@angular/core';
import {QuizService} from '../quiz.service';
import {Quiz} from '../../shared/quiz.model';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizList: Quiz[];

  constructor(private quizService: QuizService,
              private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.quizService.getQuizList().subscribe((quizs) => {
      this.quizList = quizs;
      this.spinnerService.hide();
    });
  }

}
