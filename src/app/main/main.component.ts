import { Component, Input } from '@angular/core';
import { ColorChangeComponent } from '../color-change/color-change.component';
function randomClr() {
  const randomNum = () => Math.round(Math.random() * 256);
  const bgClr = `rgb(${randomNum()},${randomNum()},${randomNum()} )`;
  return bgClr;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ColorChangeComponent],
  templateUrl: './main.component.html',
  styles: `
  div{min-height:60vh;
    text-align:center;
  }
  button{
    border:none;
    padding:5px 15px;
    border-radius:15px;
    margin-bottom:1rem;
  }
/*h1{
  display:hidden;
}*/
`,
})
export class MainComponent {
  clicked: boolean = false;
  display: boolean = true;
  bgClr: string = '';
  show() {
    this.clicked = !this.clicked;
    this.display = !this.display;
    this.bgClr = randomClr();
  }
}
