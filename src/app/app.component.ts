import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sidebar';
  dropdowns = [
    { id: 1, title: 'Admin', isOpen: false },
    { id: 2, title: 'Student', isOpen: false },
    { id: 3, title: 'Account Setup', isOpen: false },
    { id: 4, title: 'Voucher', isOpen: false },
    { id: 5, title: 'Billing', isOpen: false },
    { id: 6, title: 'Payroll', isOpen: false },
    { id: 7, title: 'Inventory', isOpen: false },
    { id: 8, title: 'Preferences', isOpen: false },
    { id: 9, title: 'Internal Exam', isOpen: false },
    { id: 10, title: 'Board Exam', isOpen: false },
    { id: 11, title: 'Library', isOpen: false },
    { id: 12, title: 'Attendence', isOpen: false },
    { id: 13, title: 'Management', isOpen: false },
    { id: 14, title: 'Bus Management', isOpen: false },
    { id: 15, title: 'Hostel', isOpen: false },
    { id: 16, title: 'Messaging', isOpen: false },
  ];

  toggleDropdown(dropdown: any): void {
    this.dropdowns.forEach((d) => {
      if (d !== dropdown) {
        d.isOpen = false;
      }
    });

    dropdown.isOpen = !dropdown.isOpen;
  }
}
