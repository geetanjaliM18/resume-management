import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), DashboardComponent],
  exports: [RouterModule]
})
export class DashboardModule {}
