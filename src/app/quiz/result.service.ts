import {Injectable} from '@angular/core';
import {Quiz} from '../shared/quiz.model';
import {QuizResult} from '../shared/result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private currentQuiz: Quiz;
  private questionsAnswers: number[] = [];

  constructor() {
  }

  public startQuiz(quiz: Quiz) {
    this.currentQuiz = quiz;
    this.questionsAnswers = [];
    this.currentQuiz.questions.forEach(() => this.questionsAnswers.push(-1));
  }

  public selectAnswer(questionIndex: number, answerIndex: number) {
    this.questionsAnswers[questionIndex] = answerIndex;
  }

  finishQuiz(): QuizResult {
    let correctAnswers = 0;
    this.questionsAnswers.forEach((value, index) => {
      if (this.currentQuiz.questions[index].correctAnswerIndex === value) {
        correctAnswers++;
      }
    });
    return new QuizResult(this.currentQuiz.questions.length, correctAnswers);
  }
}
