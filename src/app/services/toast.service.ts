import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private afs:AngularFirestore) { }

  getMessages(){
    return this.afs.collection("messages").snapshotChanges();
  }
  sendMessage(content,style){
    const message=new Message(content,style);
    this.afs.collection('messages').add(message);
  }
  dismissMessage(messageKey) {
    this.afs.doc(`messages/${messageKey}`).update({'dismissed': true})
  }
}
