import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../shared/quiz.model';
import {QuizService} from '../quiz.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ResultService} from '../result.service';

@Component({
  selector: 'app-quiz-walkthrough',
  templateUrl: './quiz-walkthrough.component.html',
  styleUrls: ['./quiz-walkthrough.component.scss']
})
export class QuizWalkthroughComponent implements OnInit {

  private quiz: Quiz;

  constructor(private quizService: QuizService,
              private resultService: ResultService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.quiz = this.quizService.getQuizById(id);
    this.resultService.startQuiz(this.quiz);
  }

  onSubmit() {
    console.log(this.resultService.finishQuiz());
  }
}
