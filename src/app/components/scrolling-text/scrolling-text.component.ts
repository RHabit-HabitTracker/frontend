import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-scrolling-text',
  imports: [NgxFastMarqueeModule, CardModule, FieldsetModule],
  templateUrl: './scrolling-text.component.html',
  styleUrl: './scrolling-text.component.css'
})
export class ScrollingTextComponent implements OnInit {
  // Renderer2 for DOM manipulation
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const randomStart = Math.random();
    // CSS variable for random start
    this.renderer.setProperty(document.documentElement, 'style', "--random-start: " + randomStart);
  }
}
