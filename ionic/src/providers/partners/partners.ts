import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PartnersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartnersProvider {

  partnersObject = { 
    partner: [
    { name: "Partner 1", isDisplayed: true },
    { name:"Parwtner 2", isDisplayed: true },
    { name:"WePartner 3", isDisplayed: true },
    { name:"RPartner 4", isDisplayed: true }
  ]};

  constructor(private http: HttpClient) {
    console.log('Hello PartnersProvider Provider');
  }

  getPartnersObject()
  {
    return this.partnersObject;
  }

}
