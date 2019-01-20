import {Injectable} from '@angular/core';
import {Question, Quiz} from '../shared/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizList: Quiz[] = [
    new Quiz('History test', 'A small test to check your history knowledge', [
        new Question('World War I began in which year?', ['1923', '1938', '1917', '1914'], 3),
        new Question('Adolf Hitler was born in which country?', ['France', 'Germany', 'Austria', 'Hungary'], 2),
        new Question('John F. Kennedy was assassinated in:', ['New York', 'Austin', 'Dallas', 'Miami'], 2),
      ]
    ),
    new Quiz('History test', 'A small test to check your history knowledge', [
        new Question('World War I began in which year?', ['1923', '1938', '1917', '1914'], 3),
        new Question('Adolf Hitler was born in which country?', ['France', 'Germany', 'Austria', 'Hungary'], 2),
        new Question('John F. Kennedy was assassinated in:', ['New York', 'Austin', 'Dallas', 'Miami'], 2),
      ]
    ),
  ];

  constructor() {
  }

  getQuizList(): Quiz[] {
    return this.quizList.slice();
  }

  getQuizById(i: number): Quiz {
    return this.quizList.slice()[i];
  }
}

