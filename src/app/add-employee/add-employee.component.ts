import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
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
    let data:any ={"empcode":this.empcode,"designation":this.designation,"salary":this.salary,"companyName":this.companyName,
  "mobno":this.mobno,"username":this.username,"password":this.password}

  console.log(data)
  this.api.addEmployee(data).subscribe(

   (response)=>
   {
      console.log(response)
   }


  )
  }


}
