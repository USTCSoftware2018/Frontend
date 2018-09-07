import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { StartResetComponent } from './start-reset/start-reset.component';
import { CpltResetComponent } from './cplt-reset/cplt-reset.component';

const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'startreset', component: StartResetComponent},
  {path: 'cpltreset', component: CpltResetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticRoutingModule { }
