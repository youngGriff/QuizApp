export class Quiz {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public questions: Question[]) {
  }
}

export class Question {

  constructor(public questionText: string,
              public answers: string[],
              public correctAnswerIndex: number) {
  }
}



