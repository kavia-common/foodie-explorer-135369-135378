import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodie_frontend is being generated';
}
