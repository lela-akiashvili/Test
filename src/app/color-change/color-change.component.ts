import { Component } from '@angular/core';

@Component({
  selector: 'app-color-change',
  standalone: true,
  imports: [],
  template: `<input type="text" #input/><button (click)="saveVal(input.value)">apply color</button>`,
  styles: '',
})
export class ColorChangeComponent {
  saveVal(value:string){
    return value;
    // console.log(value);
  }
}
