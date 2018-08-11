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
	document.getElementById('navbar-search').style.display='none';
  }
  toggleSearch () {
  	console.log('click!')
  	var selector = document.getElementById('navbar-search')
  	if (selector.style.display == 'block') selector.style.display='none';
  	else selector.style.display='block';
  }

}
