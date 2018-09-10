import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { User } from '../Interface/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  private has_shown = false;
  private input: any = null;
  private menu_lists: any = null;
  public user: User = null;
  to_search: String;
  constructor(private el: ElementRef) {
    this.user = new User(1, 'WTWTWTWT9');
  }

  ngOnInit() {
    console.log(this.user);
  }
  toggle_search() {
    if (this.input == null) {
      this.input = this.el.nativeElement.querySelector('.navbar-input');
    }
    if (this.menu_lists == null) {
      this.menu_lists = this.el.nativeElement.querySelectorAll('.ant-menu-item');
    }
    let i: number;
    if (!this.has_shown) {
        this.has_shown = true;
        for (i = 1; i < this.menu_lists.length - 1; i++) {
            this.menu_lists[i].style.transform = 'translate(0, -50px)';
        }
        this.input.style.transform = 'translate(0px,0px)';
        this.input.style.zIndex = 1;
        this.input.style.opacity = 1;
    } else {
        this.has_shown = false;
        for (i = 1; i < this.menu_lists.length - 1; i++) {
            this.menu_lists[i].style.transform = 'translate(0, 0px)';
        }
        this.input.style.transform = 'translate(0px,-50px)';
        this.input.style.zIndex = -1;
        this.input.style.opacity = 0;
    }
  }
}
