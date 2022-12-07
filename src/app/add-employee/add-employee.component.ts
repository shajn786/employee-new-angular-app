import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
  empname=""
  designation=""
  salary=""
  companyName=""
  mobno=""
  username=""
  password=""
  constructor(private api :ApiService)
  {

  }

  readValues=()=>
  {
    let data:any ={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"companyName":this.companyName,
  "mobno":this.mobno,"username":this.username,"password":this.password}

  console.log(data)
  this.api.addEmployee(data).subscribe(

   (response:any)=>
   {
      console.log(response)
      if(response.status == "success")
      {
        alert("added successfully")
        this.empcode=""
        this.empname=""
        this.designation=""
        this.salary=""
        this.companyName=""
        this.mobno=""
        this.username=""
        this.password=""
      }
      else{
        alert("not added")
      }
   }


  )
     
 

  }


}
