import { Component } from '@angular/core';
import { faBrush } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone:true,
  template: `
    <nav>
      <ul>
        <li>favourites</li>
        <li>settings</li>
        <li>log out</li>
      </ul>
    </nav>
  `,
  styles: `
  ul{
    padding-left:0;
    display:flex;
    list-style: none;
    width:fit-content;
    gap:1rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size:20px;
  }`,
})
export class NavComponent {

}
