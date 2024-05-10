import { Component } from '@angular/core';
import { ColorChangeComponent } from '../color-change/color-change.component';
import { TextComponent } from '../text/text.component';
import { ImgsComponent } from '../imgs/imgs.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TextComponent, ColorChangeComponent, ImgsComponent],
  templateUrl: './main.component.html',
  styles: `
  main{
    padding:0 2rem;
    min-height:65vh;
  }
  div{
    padding:1rem 0;
   
    text-align:center;
  }
  section{
     min-height:20vh;
  }`,
})
export class MainComponent {
  backgroundColor: string = '';

  changeBackgroundColor(color: string) {
    this.backgroundColor = color;
  }
}
