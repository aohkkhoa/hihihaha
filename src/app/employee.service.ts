import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseurl='http://localhost:8080/getall';
  private base1url='http://localhost:8080/adduser';
  constructor(private httpClient: HttpClient) { }
  getemployeelist(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseurl}`)
    }
    createempl(employee: Employee): Observable<Object>{
      return this.httpClient.post(`${this.base1url}`, employee)
    }
    isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }
    logOut() {
      sessionStorage.removeItem('username')
    }
}
