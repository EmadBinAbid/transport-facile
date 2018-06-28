import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/RouteService/route.service';

@Component({
  selector: 'app-tfa-header',
  templateUrl: './tfa-header.component.html',
  styleUrls: ['./tfa-header.component.scss']
})
export class TFAHeaderComponent implements OnInit {

  title: string = "Transport Facile";
  isMenu: boolean = false;

  constructor(private routeService : RouteService) { }

  ngOnInit() {
  }

  menuStatus()
  {
    if(this.isMenu === false)
    {
      this.isMenu = true;
    }
    else
    {
      this.isMenu = false;
    }
  }

  set()
  {
    //Test function. Delete it.
  }

}
