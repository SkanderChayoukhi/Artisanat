
  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketplace';
  scrollToContact(): void {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}

