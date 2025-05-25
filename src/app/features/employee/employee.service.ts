import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<Employee[]>([
    { id: 1, name: 'Geetanjali Marwaha', email: 'geetanjalimarwaha18@gmail.com' },
    { id: 2, name: 'Amarjeet', email: 'amarjeet@gmail.com' }
  ]);
  employees$ = this.employeesSubject.asObservable();

  addEmployee(employee: Employee) {
    const current = this.employeesSubject.value;
    this.employeesSubject.next([...current, employee]);
  }
}
