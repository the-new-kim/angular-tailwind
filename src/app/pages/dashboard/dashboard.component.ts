import { Component, OnInit } from '@angular/core';
import { Subject, throttleTime } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  private obs = new Subject();

  ngOnInit(): void {
    this.obs.pipe(throttleTime(1000));
  }

  public onBtnClick(event: MouseEvent) {
    console.log(event);
    this.obs.next(event);
  }
}
