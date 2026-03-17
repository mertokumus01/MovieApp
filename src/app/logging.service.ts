import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  message: string[] = [];
  addMessage(message : string){
    this.message.push(message);
  }
  clearMessage(){
  this.message=[];
  }
}

