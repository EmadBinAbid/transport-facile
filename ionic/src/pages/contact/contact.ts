import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PartnersProvider } from '../../providers/partners/partners';
import { Partner } from '../../interfaces/partner.interface';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  partnersObject: Partner;
  searchedText: string;

  constructor(
    public navCtrl: NavController,
    private partnersProvider: PartnersProvider
    ) 
  {
    this.loadPartnersList();
  }

  ionViewDidLoad()
  {
    // this.loadPartnersList();
  }

  loadPartnersList()
  {
    this.partnersObject = this.partnersProvider.getPartnersObject();
  }

  search()
  {
    if (this.searchedText.length === 0) 
    {
      for (var i = 0; i < this.partnersObject.partner.length; i++) 
      {
          this.partnersObject.partner[i].isDisplayed = true;
      }
    }

    for(var i=0; i<this.partnersObject.partner.length; i++)
    {
      if( this.partnersObject.partner[i].name.indexOf(this.searchedText) != -1 )
      {
        this.partnersObject.partner[i].isDisplayed = true;
      }
      else
      {
        this.partnersObject.partner[i].isDisplayed = false;
      }
    }
  }
}
