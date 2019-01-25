import {Injectable} from '@angular/core';
import {Question, Quiz} from '../shared/quiz.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizList$: Observable<Quiz[]>;

  constructor(private firestore: AngularFirestore) {
    this.quizList$ = this.firestore
      .collection('quizs')
      .snapshotChanges()
      .pipe(
        map((data) => {
          return data.map((e) => {
              return {id: e.payload.doc.id, ...e.payload.doc.data()} as Quiz;
            }
          );
        }),
      );
  }



  getQuizList(): Observable<Quiz[]> {
    return this.quizList$;
  }

  getQuizById(id: string): Observable<Quiz> {
    return this.firestore.doc(`quizs/${id}`).get().pipe(
      map((value) => {
        return {id: value.id, ...value.data()} as Quiz;
      })
    );
  }

}

