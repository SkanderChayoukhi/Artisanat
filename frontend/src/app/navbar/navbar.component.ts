import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '../services/accounts/account.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  authenticated: any;
  showMe: boolean = true;
  showDropdown = false;

  constructor(private accountService: AccountService, private dialog: MatDialog) {}

  @Output() onContactClick = new EventEmitter<void>();

  emitContactClick(): void {
    this.onContactClick.emit();
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  ngOnInit() {
    this.authenticated = localStorage.getItem("token") != null;
    this.accountService.getAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  toogleTag() {
    this.showMe = !this.showMe;
  }

  logout() {
    // Clear token from local storage
    localStorage.removeItem('token');

    // Update authenticated state
    this.accountService.setAuthenticated(false);
  }

  openCart(): void {
    this.dialog.open(CartComponent, {
      width: '450px'
    });
  }
}