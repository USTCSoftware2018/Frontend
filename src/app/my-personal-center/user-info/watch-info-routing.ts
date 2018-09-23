import { Route } from '@angular/router';
import { UserinfoComponent } from './watch-info/userinfo.component';
import {DetailinfoComponent} from './watch-info/detailinfo/detailinfo.component';
import {DetailinfoBylabelComponent} from './watch-info/detailinfo-bylabel/detailinfo-bylabel.component';
import {DetailinfoByarchiveComponent} from './watch-info/detailinfo-byarchive/detailinfo-byarchive.component';

export const userinfo_route: Route = {
  path: 'myinfo', component: UserinfoComponent,
  children: [
    { path: '', redirectTo: 'index'} ,
    { path: 'index', component: DetailinfoComponent},
    { path: 'label/:name', component: DetailinfoBylabelComponent},
    { path: 'archive/:data', component: DetailinfoByarchiveComponent},
    ]
};
