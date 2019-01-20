import {Injectable} from '@angular/core';
import {Quiz} from '../shared/quiz.model';
import {QuizResult} from '../shared/result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private currentQuiz: Quiz;
  private questionsAnswers: number[] = [];
  private results: QuizResult[] = [];

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

  getResultById(id: number) {
    return this.results.slice()[id];
  }

  finishQuiz(): number {
    let correctAnswers = 0;
    this.questionsAnswers.forEach((value, index) => {
      if (this.currentQuiz.questions[index].correctAnswerIndex === value) {
        correctAnswers++;
      }
    });
    const result = new QuizResult(this.currentQuiz.questions.length, correctAnswers);
    this.results.push(result);
    return this.results.length - 1;
  }
}
