import {Component, OnInit} from '@angular/core';
import {ResultService} from '../result.service';
import {ActivatedRoute} from '@angular/router';
import {QuizResult} from '../../shared/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result: QuizResult;

  constructor(private resultService: ResultService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.result = this.resultService.getResultById(id);
  }

}
