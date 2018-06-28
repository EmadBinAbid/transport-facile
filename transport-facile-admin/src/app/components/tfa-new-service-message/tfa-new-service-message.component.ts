import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tfa-new-service-message',
  templateUrl: './tfa-new-service-message.component.html',
  styleUrls: ['./tfa-new-service-message.component.scss']
})
export class TFANewServiceMessageComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    
   }

  ngOnInit() {
    
  }
  navigate()
  {
    this.router.navigateByUrl('app/serviceType');
  }

}
