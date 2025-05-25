import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, Employee } from './employee.service';
import { HighlightDirective } from '../../shared/highlight.directive';  // adjust path as needed
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HighlightDirective],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employees: Employee[] = [];
    public form:any;
  
    constructor(private fb: FormBuilder, private empService: EmployeeService) {
    this.empService.employees$.subscribe(data => (this.employees = data));
    }

  ngOnInit(): void {
    this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });
  }

  onSubmit() {
    if (this.form.valid) {
      const newEmp: Employee = {
        id: Date.now(),
        name: this.form.value.name!,
        email: this.form.value.email!
      };
      this.empService.addEmployee(newEmp);
      this.form.reset();
    }
  }
}
