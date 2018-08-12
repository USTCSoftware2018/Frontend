import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  providers: [HttpService]
})
export class NavbarComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get_user_name(1);
    let selector: any = document.getElementById('navbar-search');
	selector.style.width=0;
    selector.style.paddingLeft='0em';
    selector.style.paddingRight='0em';
    console.log(selector.style);
  }
  toggleSearch () {
  	let selector: any = document.getElementById('navbar-search');
  	if (selector.style.width=='10em') {
        selector.style.width=0;
        selector.style.paddingLeft=0;
        selector.style.paddingRight=0;
        let i: number;
    }
  	else {
        selector.style.width='10em';
        selector.style.paddingLeft='0.375em';
        selector.style.paddingRight='0.375em';
        let i: number;
    }
  }

}
