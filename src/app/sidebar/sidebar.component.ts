import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule],
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Admin',
      icon: 'fa-duotone fa-solid fa-user-tie',
      link: '/home',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Student',
      icon: 'fa-sharp fa-solid fa-school',
      link: '#',
      subItems: [
        {
         
          label: 'Grade',
          icon: 'fa-duotone fa-solid fa-graduation-cap',
          link: '#',
          subItems: [
            { label: 'Laptops', link: '/products/electronics/laptops',icon:'fa-duotone fa-solid fa-laptop' },
            { label: 'Smartphones', link: '/products/electronics/smartphones', icon:'fa-solid fa-mobile-notch' },
          ],
          expanded: false,
        },
        
      ],
      expanded: false,
    },
  
      {
        label: 'Account Setup',
        icon: 'fa-sharp fa-solid fa-user-gear', // Account setup-related icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Voucher',
        icon: 'fa-sharp fa-solid fa-receipt', // Voucher/Invoice icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Billing',
        icon: 'fa-sharp fa-solid fa-file-invoice-dollar', // Billing icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Payroll',
        icon: 'fa-sharp fa-solid fa-money-check-dollar', // Payroll/Salary icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Human Resources',
        icon: 'fa-sharp fa-solid fa-users-gear', // HR-related icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Inventory',
        icon: 'fa-sharp fa-solid fa-warehouse', // Inventory/Warehouse icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Preference',
        icon: 'fa-sharp fa-solid fa-sliders', // Settings/Preferences icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Internal Exam',
        icon: 'fa-sharp fa-solid fa-file-circle-check', // Exam/Test icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Board Exam',
        icon: 'fa-sharp fa-solid fa-graduation-cap', // Education/Exam icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Library',
        icon: 'fa-sharp fa-solid fa-book-open', // Library/Books icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Attendance',
        icon: 'fa-sharp fa-solid fa-user-check', // Attendance/Check-in icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Management',
        icon: 'fa-sharp fa-solid fa-briefcase', // Management/Business icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Hostel',
        icon: 'fa-sharp fa-solid fa-bed', // Hostel/Lodging icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
      {
        label: 'Messaging',
        icon: 'fa-sharp fa-solid fa-comments', // Messaging/Chat icon
        link: '/services',
        subItems: [],
        expanded: false,
      },
    
  ];
  isSidebarOpen = true;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSubMenu(menuItem: any): void {
    menuItem.expanded = !menuItem.expanded;
  }

  toggleSubSubMenu(subMenuItem: any): void {
    subMenuItem.expanded = !subMenuItem.expanded;
  }
}
