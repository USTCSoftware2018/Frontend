import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchboxComponent } from './searchbox/searchbox.component';

const routes: Routes = [
  {path: '', component: SearchboxComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
