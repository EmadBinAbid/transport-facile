import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tfa-app',
  templateUrl: './tfa-app.component.html',
  styleUrls: ['./tfa-app.component.scss']
})
export class TFAAppComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
