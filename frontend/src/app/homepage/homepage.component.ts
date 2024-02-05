import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  // Inject the Router into the constructor
  constructor(private router: Router) {}

  goToProducts(): void {
    // Navigate to the products page
    this.router.navigateByUrl('/products');
  }
}
