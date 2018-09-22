import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyCenterIndexComponent} from './my-center-index/my-center-index.component';

const routes: Routes = [
  { path: '', component: MyCenterIndexComponent},
  { path: 'userset', loadChildren: './user-set/user-set.module#UserSetModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPersonalCenterRoutingModule { }
