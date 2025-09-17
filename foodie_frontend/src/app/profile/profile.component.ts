import { Component } from '@angular/core';

/**
 * PUBLIC_INTERFACE
 * ProfileComponent renders the Profile screen converted from static HTML/CSS.
 * It is a standalone component to simplify integration and routing.
 */
@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent { }
