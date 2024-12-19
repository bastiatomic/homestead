import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  header_text: string = 'Oh, a new adventurer!';
  header_text_sub: string =
    'Sit down, grab a cookie and enjoy the view';
  mindset_header: string = 'Well, that\'s me. Curious as always.';

  items: { header: string; content: string; img: string|null }[] = [
    {
      content: 'More like a hobby hiker',
      header: 'Nature & Hiking',
      img: 'nature.jpg',
    },
    {
      content: 'Muffins, Cakes: Randomly bringing them to Game Nights',
      header: 'Baking a.k.a. Hobby Baker',
      img: 'let_him_cook.png',
    },
    {
      content:
        'Saves a ton of money to let me focus more on the important things in life',
      header: 'Lifestyle: Minimalism',
      img: null,
    },
    {
      content:
        'Mostly Ambient Music of the Horizon Franchise. Sometimes love is in the air',
      header: 'Music',
      img: 'music.png',
    },
    {
      content: 'Software Developer / Arhcitect, who\'s currently learning Robotics and Machine Learning',
      header: 'Career',
      img: null,
    },
    {
      content: "'Quote Wall', and not taking life and stuff too serious got me a long way",
      header: 'Comedy',
      img: null
    },
    {
      content: '...',
      header: 'If this is your vibe',
      img: 'if_this_is_your_vibe,civitai23133808.jpeg',
    },
    {
      content:
        'Strategy Games & Beauty Building, some architecture planning along the way',
      header: 'Gaming',
      img: null,
    },
    {
      content:
        'Recreation of games like Atari Breakout, Klotksi, Chess, misc. Card Games',
      header: 'Hobby Software Development',
      img: null,
    }
  ];
}
