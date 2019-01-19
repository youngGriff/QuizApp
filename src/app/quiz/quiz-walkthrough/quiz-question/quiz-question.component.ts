import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../shared/quiz.model';
import {ResultService} from '../../result.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionId: number;

  constructor(private resultService: ResultService) {
  }

  ngOnInit() {
  }

  onAnswerSelected(i: number) {
    this.resultService.selectAnswer(this.questionId, i);
  }
}
