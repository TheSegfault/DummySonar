import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home-test.component.html',
  styleUrls: [ './home-test.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTestComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
