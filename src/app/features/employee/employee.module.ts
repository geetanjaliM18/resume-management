import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { HighlightDirective } from '../../shared/highlight.directive'; 

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), EmployeeComponent, HighlightDirective ],
  exports: [RouterModule]
})
export class EmployeeModule {}

