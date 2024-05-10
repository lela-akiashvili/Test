import { Component } from '@angular/core';
function randomClr() {
  const randomNum = () => Math.round(Math.random() * 256);
  const bgClr = `rgb(${randomNum()},${randomNum()},${randomNum()} )`;
  return bgClr;
}
@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  template: `<button (click)="show()" [style.backgroundColor]="bgClr">
      text
    </button>
    <h1 [hidden]="display">some text</h1>
    <br />`,
  styles: `button{
  border: none;
  padding:5px 15px;
  border-radius:15px;
  margin-bottom:1rem;
  cursor:pointer;}
  button:hover{
    background-Color:lightgray;
  }`,
})
export class TextComponent {
  clicked: boolean = false;
  display: boolean = true;
  bgClr: string = '';
  show() {
    this.clicked = !this.clicked;
    this.display = !this.display;
    this.bgClr = randomClr();
  }
}
