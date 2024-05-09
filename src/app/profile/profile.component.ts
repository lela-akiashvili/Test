import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styles: `
  div{
    box-sizing: border-box;
    margin: 0;
    display:flex;
    gap:1rem;
    align-items: center;
    flex-wrap: wrap;
  height:min-content;
  }
  img{
    max-width:8vw;
    background:transparent;  }
  h2{
    font-family:arial;
  }`,
})
export class ProfileComponent {}
