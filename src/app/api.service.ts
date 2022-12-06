import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {

    
   }

fetchEmployee=()=>
{
  return this.http.get("http://localhost:8080/viewall")
}

addEmployee=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/add",datatosend)
}

}
