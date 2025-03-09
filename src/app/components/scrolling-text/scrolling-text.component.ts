import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

interface Quote {
  image: string;
  author: string;
  text: string;
}

@Component({
  selector: 'app-scrolling-text',
  imports: [CommonModule, NgxFastMarqueeModule, FieldsetModule, AvatarModule],
  templateUrl: './scrolling-text.component.html',
  styleUrl: './scrolling-text.component.css'
})

export class ScrollingTextComponent {
  quotes: Quote[] = [
    {
      image: 'assets/img-quotes/ghandi.jpg',
      author: 'Mahatma Ghandi',
      text: 'Sei du selbst die Veränderung, die du dir wünschst für diese Welt.'
    },
    {
      image: 'assets/img-quotes/hill.jpg',
      author: 'Napoleon Hill',
      text: 'Warte nicht. Die Zeit wird niemals genau richtig sein.'
    },
    {
      image: 'assets/img-quotes/keller.jpg',
      author: 'Helen Keller',
      text: 'Das Leben ist entweder ein gewagtes Abenteuer oder nichts.'
    },
    {
      image: 'assets/img-quotes/brecht.webp',
      author: 'Bertolt Brecht',
      text: 'Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.'
    },
    {
      image: 'assets/img-quotes/eliot.png',
      author: 'George Eliot',
      text: 'Es ist nie zu spät, das zu werden, was man hätte sein können.'
    },
    {
      image: 'assets/img-quotes/disney.jpg',
      author: 'Walt Disney',
      text: 'Alle Träume können wahr werden, wenn wir den Mut haben, ihnen zu folgen.'
    }
  ];
}
