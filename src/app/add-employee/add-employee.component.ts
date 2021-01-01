import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empModel:Employee;
  message:any;
  submitted:boolean=false;

  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.empModel = this.empService.empGetter()
  }

  public saveEmployee(){
    let resp = this.empService.postEmp(this.empModel);
    resp.subscribe(data=>this.message=data);
    this.submitted=true;
  }

}
