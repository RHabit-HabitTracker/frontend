import { Component, Input, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { CommonModule } from '@angular/common';
import { Quote } from '../../types/quote';

@Component({
  selector: 'app-quote',

  
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {
  protected quote: Quote | null = null;

  @Input() color: string = '#007bff';

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe(quote => {
      this.quote = quote;
    })
  }
}
