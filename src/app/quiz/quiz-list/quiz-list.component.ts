import {Component, OnInit} from '@angular/core';
import {QuizService} from '../quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizList;

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.quizList = this.quizService.getQuizList();
  }

}
