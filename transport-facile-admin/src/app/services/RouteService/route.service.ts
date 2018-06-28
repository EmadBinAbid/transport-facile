import { Injectable } from '@angular/core';

import{ BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import{ Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  $onHomePageSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  $onHomePage: Observable<boolean>;

  constructor() { 
    this.$onHomePage = this.$onHomePageSubject.asObservable();
  }
  
}
