import {Injectable} from '@angular/core';
import {Quiz} from '../shared/quiz.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizList$: Observable<Quiz[]>;
  private firestorePath = 'quizzes';

  constructor(private firestore: AngularFirestore) {
    this.quizList$ = this.firestore
      .collection(this.firestorePath)
      .snapshotChanges()
      .pipe(
        map((data) => {
          return data.map((e) => {
              return { ...e.payload.doc.data(), id: e.payload.doc.id} as Quiz;
            }
          );
        }),
      );
  }

  getQuizList(): Observable<Quiz[]> {
    return this.quizList$;
  }

  getQuizById(id: string): Observable<Quiz> {
    return this.firestore.doc(`${this.firestorePath}/${id}`)
      .get()
      .pipe(
        map((value) => {
          return {id: value.id, ...value.data()} as Quiz;
        })
      );
  }


}

