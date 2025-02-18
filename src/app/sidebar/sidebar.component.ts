import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule],
  animations: [
    trigger('toggleMenu', [
      transition(':enter', [
        style({ transform: 'translateX(120%)' }),
        animate('1s ease-in', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('1s ease-out', style({ transform: 'translateX(120%)' }))
      ])
    ])
  ],
  
})
export class SidebarComponent implements OnInit {
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
            {
              label: 'Laptops',
              link: '/products/electronics/laptops',
              icon: 'fa-duotone fa-solid fa-laptop',
            },
            {
              label: 'Smartphones',
              link: '/products/electronics/smartphones',
              icon: 'fa-solid fa-mobile-notch',
            },
          ],

          expanded: false,
        },
      ],
      expanded: false,
    },
    {
      label: 'Account Setup',
      icon: 'fa-sharp fa-solid fa-user-gear',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Voucher',
      icon: 'fa-sharp fa-solid fa-receipt',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Billing',
      icon: 'fa-sharp fa-solid fa-file-invoice-dollar',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Payroll',
      icon: 'fa-sharp fa-solid fa-money-check-dollar',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Human Resources',
      icon: 'fa-sharp fa-solid fa-users-gear',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Inventory',
      icon: 'fa-sharp fa-solid fa-warehouse',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Preference',
      icon: 'fa-sharp fa-solid fa-sliders',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Internal Exam',
      icon: 'fa-sharp fa-solid fa-file-circle-check',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Board Exam',
      icon: 'fa-sharp fa-solid fa-graduation-cap',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Library',
      icon: 'fa-sharp fa-solid fa-book-open',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Attendance',
      icon: 'fa-sharp fa-solid fa-user-check',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Management',
      icon: 'fa-sharp fa-solid fa-briefcase',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Hostel',
      icon: 'fa-sharp fa-solid fa-bed',
      link: '/services',
      subItems: [],
      expanded: false,
    },
    {
      label: 'Messaging',
      icon: 'fa-sharp fa-solid fa-comments',
      link: '/services',
      subItems: [],
      expanded: false,
    },
  ];

  isSidebarOpen = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  private checkScreenSize(): void {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.renderer.addClass(document.body, 'sidebar-collapsed');
      this.isSidebarOpen = false;
    } else {
      this.renderer.removeClass(document.body, 'sidebar-collapsed');
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (!this.isSidebarOpen) {
      this.renderer.addClass(document.body, 'sidebar-collapsed');
    } else {
      this.renderer.removeClass(document.body, 'sidebar-collapsed');
    }
  }

  toggleSubMenu(menuItem: any): void {
    menuItem.expanded = !menuItem.expanded;
  }

  toggleSubSubMenu(subMenuItem: any): void {
    subMenuItem.expanded = !subMenuItem.expanded;
  }
}
