import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../models/customer-model';
import { observable, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  formData : Customers;

  readonly APIUrl = "http://localhost:57947/api"

  getCustomersList() : Observable<Customers[]>{
    return this.http.get<Customers[]>(this.APIUrl+'/Customer');
  }

  addCustomer(customer:Customers){
    return this.http.post(this.APIUrl+'/Customer',customer)
  }

  deleteCustomer(id:number){
    return this.http.delete(this.APIUrl+'/Customer/'+id);
  }

  updateCustomer(customer:Customers){
    return this.http.put(this.APIUrl+'/Customer/',customer)
  }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }

  filter(filterBy:string){
    this._listners.next(filterBy);
  }

}
