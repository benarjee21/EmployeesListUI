import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:any;
  edi:any;

  constructor(private empService:EmployeeServiceService, private router:Router) { }

  ngOnInit(): void {
    let resp = this.empService.getEmployees();
    resp.subscribe((data)=>this.employees=data);
    let empllo = this.employees;
  }

  public empUpdate(emp){
    this.empService.empSetter(emp);
    this.router.navigate(["/addEmployee"])
  }

  public empDelete(emp){
    this.edi = emp.empid;
    let resp = this.empService.deleteEmp(this.edi);
    resp.subscribe((data)=>this.employees=data);
  }






}
