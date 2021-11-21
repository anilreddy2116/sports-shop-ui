import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/order-model';
import { Observable, observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService{

  constructor(private http:HttpClient) { }

  formData : Orders;

  readonly APIUrl = "http://localhost:57947/api";

  getOrdersList():Observable<Orders[]>{
    return this.http.get<Orders[]>(this.APIUrl+'/Order');
  }

  addOrder(order:Orders){
    return this.http.post(this.APIUrl+'/Order',order)
  }

  deleteOrder(id:number){
    return this.http.delete(this.APIUrl+'/Order/'+id);
  }

  updateOrder(order:Orders){
    return this.http.put(this.APIUrl+'/Order/',order)
  }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }

  filter(filterBy:string){
    this._listners.next(filterBy);
  }

}
