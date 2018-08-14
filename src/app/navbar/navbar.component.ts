import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  private hasShown = false;
  private input: any = null;
  private menu_lists: any = null;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    console.log(this.menu_lists);
  }
  toggleSearch() {
    if (this.input == null) this.input = this.el.nativeElement.querySelector('.navbar-input');
    if (this.menu_lists == null) this.menu_lists = this.el.nativeElement.querySelectorAll('.ant-menu-item');
    let i: number;
    if (!this.hasShown) {
        this.hasShown = true;
        for (i = 1; i < this.menu_lists.length - 1; i++) {
            this.menu_lists[i].style.transform = 'translate(0, -50px)';
        }
        this.input.style.transform = 'translate(0px,0px)';
        this.input.style.zIndex = 1;
        this.input.style.opacity = 1;
    } else {
        this.hasShown = false;
        for (i = 1; i < this.menu_lists.length - 1; i++) {
            this.menu_lists[i].style.transform = 'translate(0, 0px)';
        }
        this.input.style.transform = 'translate(0px,-50px)';
        this.input.style.zIndex = -1;
        this.input.style.opacity = 0;
    }
  }
}
