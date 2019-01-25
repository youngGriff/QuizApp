import {Injectable} from '@angular/core';
import {Quiz} from '../shared/quiz.model';
import {QuizResult} from '../shared/result.model';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private currentQuiz: Quiz;
  private questionsAnswers: number[] = [];
  private firestorePath = 'results';

  constructor(private firestore: AngularFirestore) {
  }

  public startQuiz(quiz: Quiz) {
    this.currentQuiz = quiz;
    this.questionsAnswers = [];
    this.currentQuiz.questions.forEach(() => this.questionsAnswers.push(-1));
  }

  public selectAnswer(questionIndex: number, answerIndex: number) {
    this.questionsAnswers[questionIndex] = answerIndex;
  }

  getResultById(id: string): Observable<QuizResult> {
    return this.firestore.doc(`${this.firestorePath}/${id}`)
      .get()
      .pipe(
        map((value) => {
          return {id: value.id, ...value.data()} as QuizResult;
        })
      );
  }

  finishQuiz(): Promise<DocumentReference> {
    let correctAnswers = 0;
    this.questionsAnswers.forEach((value, index) => {
      if (this.currentQuiz.questions[index].correctAnswerIndex === value) {
        correctAnswers++;
      }
    });
    const result = new QuizResult(this.currentQuiz.questions.length, correctAnswers, null);
    return this.firestore.collection(this.firestorePath).add({...result});
  }
}
