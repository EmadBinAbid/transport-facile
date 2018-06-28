import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tfa-app',
  templateUrl: './tfa-app.component.html',
  styleUrls: ['./tfa-app.component.scss']
})
export class TFAAppComponent implements OnInit {

  isMenu: boolean = false;
  currentMenuIndex: number = 0;

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

  navigate(menuItemIndex: number)
  {
    console.log(`Menu Item: ${menuItemIndex}`);
    this.currentMenuIndex = menuItemIndex;
    /*if(menuItemIndex === 0)
    {
      this.router.navigateByUrl('/app/dashboard');
    }
    if(menuItemIndex === 1)
    {
      this.router.navigateByUrl('/app/routes');
    }
    if(menuItemIndex === 2)
    {
      this.router.navigateByUrl('/app/students');
    }
    if(menuItemIndex === 3)
    {
      this.router.navigateByUrl('/app/serviceType');
    }*/
  }

}
