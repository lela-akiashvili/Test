import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
  nav{
    display:flex;
    justify-content:space-evenly;
  }
  ul{
    list-style:none;
    cursor:pointer;
    
  }li{
    text-decoration:underline;
  }`,
})
export class FooterComponent {}
