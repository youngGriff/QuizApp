import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResultService} from '../result.service';
import {ActivatedRoute} from '@angular/router';
import {QuizResult} from '../../shared/result.model';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  result: QuizResult;
  subscription: Subscription;

  constructor(private resultService: ResultService,
              private spinnerService: Ng4LoadingSpinnerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.spinnerService.show();
    this.subscription = this.resultService.getResultById(id).subscribe((result) => {
      this.result = result;
      this.spinnerService.hide();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
