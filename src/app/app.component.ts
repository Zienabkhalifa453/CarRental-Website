import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/Hero/hero/hero.component';
import { FooterComponent } from './components/Footer/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,HeroComponent,FooterComponent,RouterOutlet,ServicesComponent,CarsComponent,ContactComponent,NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pro';
}
