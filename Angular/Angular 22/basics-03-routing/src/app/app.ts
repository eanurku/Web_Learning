import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { NotFound } from './components/not-found/not-found';


@Component({
  imports: [RouterOutlet,  RouterLink, RouterLinkActive,Home, Services, About, Contact,NotFound],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basics-03-routing');
}
