import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../models/item-model';
import { Observable, observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  formData : Items;

  readonly APIUrl = "http://localhost:57947/api";

  getItemsList():Observable<Items[]>{
    return this.http.get<Items[]>(this.APIUrl+'/Item');
  }

  addItem(item:Items){
    return this.http.post(this.APIUrl+'/Item',item)
  }

  deleteItem(id:number){
    return this.http.delete(this.APIUrl+'/Item/'+id);
  }

  updateItem(item:Items){
    return this.http.put(this.APIUrl+'/Item/',item)
  }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }

  filter(filterBy:string){
    this._listners.next(filterBy);
  }

}
