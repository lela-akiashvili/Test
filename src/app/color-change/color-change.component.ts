import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-color-change',
  standalone: true,
  imports: [],
  template: `<input type="text" #input /><button
      (click)="onSaveVal(input.value)"
    >
      apply color
    </button>`,
  styles: `input,button{
    background-color:white;
    border-radius:15px;
    outline:none;
    padding:5px 15px;
    border:1px solid darkred;
   
  }
  button:hover{
    background-color:darkred;
    color:white; cursor:pointer;
  }input{
    margin-right:5px;
  }
  `,
})
export class ColorChangeComponent {
  @Output() bgclr = new EventEmitter<string>();
  onSaveVal(value: string) {
    this.bgclr.emit(value);
    console.log(value);
  }
}
