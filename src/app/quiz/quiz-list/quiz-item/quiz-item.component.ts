import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../../shared/quiz.model';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor() {
  }

  ngOnInit() {
  }

}
