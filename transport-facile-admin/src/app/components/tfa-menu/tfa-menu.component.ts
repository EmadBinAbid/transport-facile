import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tfa-menu',
  templateUrl: './tfa-menu.component.html',
  styleUrls: ['./tfa-menu.component.scss']
})
export class TFAMenuComponent implements OnInit {

  isMenu: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setMenuBoolean()
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

  menuItemSelected(index: number)
  {
    if(index === 0)
    {
      this.router.navigate(['app/dashboard']);
    }
    if(index === 1)
    {
      this.router.navigate(['app/routes']);
    }
    if(index === 2)
    {
      this.router.navigate(['app/students']);
    }
    if(index === 3)
    {
      this.router.navigate(['app/serviceType']);
    }
    
    
  }

}
