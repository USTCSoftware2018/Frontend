import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Simuser } from '../Interface/userinfo';
import { user1 } from '../Interface/mock-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  private has_shown = false;
  private input: any = null;
  private menu_lists: any = null;
  public user: Simuser = null;
  to_search: String;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    console.log(this.user);
  }
}
