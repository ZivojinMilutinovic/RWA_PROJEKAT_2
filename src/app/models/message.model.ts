export interface IMessage{
  content:string;
  style:string;
  dismissed:boolean;
}

export class Message implements IMessage{
  content: string;
  style: string;
  dismissed: boolean = false;

  constructor(content, style?) {
    this.content = content
    this.style = style || 'info'
  }

}
