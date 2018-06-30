import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from'@angular/forms';
import { NewMessageService } from '../../services/NewMessageService/new-message.service';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-tfa-new-service-message',
  templateUrl: './tfa-new-service-message.component.html',
  styleUrls: ['./tfa-new-service-message.component.scss']
})
export class TFANewServiceMessageComponent implements OnInit {

  isEarlyService: boolean = false;
  isLateService: boolean = false;

  constructor(
    private router: Router,
    private newMessageService: NewMessageService
  ) {
    
   }

  ngOnInit() {
    
  }
  navigate()
  {
    this.router.navigateByUrl('app/serviceType');
  }

  sendMessage(newMessageFormValue)
  {
    const newMessage = {
      post: {
        adminId: "5b3760137f3a5e2bbc05a85b",
        earlyService: newMessageFormValue.early,
        lateService: newMessageFormValue.late,
        earlyTime: newMessageFormValue.earlyTime,
        lateTime: newMessageFormValue.lateTime,
        event: newMessageFormValue.event
      }
    };

    this.newMessageService.sendMessage(newMessage)
    .subscribe( () => {
      console.log("Post subscribe message.");
    } );

  }

  earlyClicked()
  {
    if(this.isEarlyService === false)
    {
      this.isEarlyService = true;
    }
    else
    {
      this.isEarlyService = false;
    }
  }

  lateClicked()
  {
    if(this.isLateService === false)
    {
      this.isLateService = true;
    }
    else
    {
      this.isLateService = false;
    }
  }

}
