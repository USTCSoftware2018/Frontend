import { Component, OnInit, HostListener,  ViewChild } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  public opacity: number;
  @ViewChild('content')
  private contentRef;
  constructor() { }
  ngOnInit() {
    const victor = Victor('container', 'output');
    const theme = [
      ['#002c4a', '#005584'],
      ['#35ac03', '#3f4303'],
      ['#101C48', '#54ACB4'],
      ['#18bbff', '#00486b']
    ];
   function settheme() {
        victor(theme[2]).set();
   }
   settheme();
  }
  @HostListener('window: scroll', [])
  changOpacity() {
    this.opacity = Math.abs(1 - window.pageYOffset / 260);
    console.log(this.opacity);
  }
}
