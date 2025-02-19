import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in => out', animate('0ms ease-in-out')),
      transition('out => in', animate('700ms ease-in-out'))
    ]),
    
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
  activeMenuItem: any = null;

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

  get sidebarState(): string {
    return this.isSidebarOpen ? 'in' : 'out';
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
    this.activeMenuItem = this.activeMenuItem === menuItem ? null : menuItem;
    menuItem.expanded = !menuItem.expanded;
  }

  toggleSubSubMenu(subMenuItem: any): void {
    subMenuItem.expanded = !subMenuItem.expanded;
  }
}
