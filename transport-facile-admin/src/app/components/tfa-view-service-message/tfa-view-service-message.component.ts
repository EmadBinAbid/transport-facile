import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMessageService } from '../../services/NewMessageService/new-message.service';
import { ResponseService } from '../../services/ResponseService/response.service';

@Component({
  selector: 'app-tfa-view-service-message',
  templateUrl: './tfa-view-service-message.component.html',
  styleUrls: ['./tfa-view-service-message.component.scss']
})
export class TFAViewServiceMessageComponent implements OnInit {

  messageList: Array<Object> = [];
  responseList: Array<Object> = [];

  constructor(
    private router: Router,
    private newMessageService: NewMessageService,
    private responseService: ResponseService
  ) 
  {
    this.newMessageService.getAllMessages()
    .subscribe( (result) => {
      this.messageList = result["post"];
    });
  }

  ngOnInit() {
  }

  navigate()
  {
    this.router.navigateByUrl('app/serviceType');
  }

  viewResponses(index: number)
  {
    const postId: string = this.responseList[index]["postId"];
    
    this.responseService.getResponseByPostId(postId)
    .subscribe( (result) => {
      this.responseList = result["response"];
    } );
  }

}
