import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysManageComponent } from './manage/manage.component';

const routes: Routes = [

  { path: 'manage', component: SysManageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule { }
