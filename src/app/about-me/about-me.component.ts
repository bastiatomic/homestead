import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatGridListModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  header_text: string = 'Oh, ein neuer Abenteurer.';
  header_text_sub: string =
    'Setz dich, schnapp dir einen Keks und genieße den Ausblick.';
  mindset_header: string = 'Na, was haben wir denn hier?';

  items: { header: string; content: string; img?: string }[] = [
    {
      content: 'Eher Amateur/Hobby-Wandern',
      header: 'Wandern & Natur',
      img: 'nature.jpg',
    },
    {
      content: 'Muffins, Kuchen: Mitbringen von Muffins zur Boardgame Night',
      header: 'Backen a.k.a Amateur-Konditor',
      img: 'let_him_cook.png',
    },
    {
      content:
        'Spart eine Menge Geld und lässt mich auf schönere Sachen im Leben fokussieren als Materialismus',
      header: 'Lifestyle: Minimalism',
    },
    {
      content:
        'Meistens Soundtracks, binge gerade HTTYD-Musik; oder Ambient; Regen ist weirdly attractive',
      header: 'Musik',
      img: 'music.png',
    },
    {
      content:
        'Avatar, How to train your dragon, Ghibli, Suits, Natur-Dokus, Comedy Hours',
      header: 'Filme & Serien',
      img: 'movies.png',
    },
    {
      content: 'Bachata und veerryyy basic Paartanz',
      header: 'Amateur-Dancer',
    },
    {
      content: "'Zitate-Wand', 'Komm mal mit zum Standup, da seh ich dich'",
      header: 'Comedy',
    },
    {
      content: '...',
      header: 'If this is your vibe',
      img: 'if_this_is_your_vibe,civitai23133808.jpeg',
    },
    {
      content:
        'Strategiespiele und Schönbauen / Bisschen Architektur along the way',
      header: 'Gaming',
      img: '',
    },
  ];
}
