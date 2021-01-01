import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  currentEmp:Employee = new Employee(null,"","","","");

  constructor(private http:HttpClient) { }

  public postEmp(emp){
    return this.http.post("http://localhost:2121/saveEmp",emp,{responseType:'text' as 'json'});
  }
  
  public getEmpById(id){
    return this.http.get("http://localhost:2121/employee/"+id);
  }
  
  public getEmployees(){
    return this.http.get("http://localhost:2121/viewAllEmployees");
  }
  
  public updateEmployee(emp){
    return this.http.put("http://localhost:2121/updateEmp",emp,{responseType:'text' as 'json'});
  }
  
  public deleteEmp(id){
    return this.http.delete("http://localhost:2121/deleteEmp/"+id);
  }
  
  public empSetter(emp:Employee){
     this.currentEmp=emp;
  }
  
  public empGetter(){
    return this.currentEmp;
  }

}
