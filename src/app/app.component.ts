import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { SlidingComponent } from "./archive/sliding/sliding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButton, CommonModule, RouterOutlet, FormsModule, SlidingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Homestead';

}
