import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent,FooterComponent],
  template:`<app-header ></app-header>
  <app-main ></app-main>
  <app-footer></app-footer>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homwork';
}
