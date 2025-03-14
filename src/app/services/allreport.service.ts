import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllreportService {

  constructor(private _HttpClient:HttpClient) { }

  getAll():Observable<any>{
    return this._HttpClient.get('http://aire.runasp.net/api/LuggageReports/all-reports')
  }

  itemDatails(id:any):Observable<any>{
    return this._HttpClient.get(`http://aire.runasp.net/api/LuggageReports/${id}`)
  }

  getShiping():Observable<any>{
    return this._HttpClient.get(`http://aire.runasp.net/api/ShippingRequests/all`)
  }

  updateStatus(id:any,status:any):Observable<any>{
    return this._HttpClient.put(`http://aire.runasp.net/api/ShippingRequests/update-status/${id}`,status)
  }

  search(companyname:any):Observable<any>{
    return this._HttpClient.get(`http://aire.runasp.net/api/ShippingRequests/search?shippingCompanyName=${companyname}`)
  }

  delet(id:any):Observable<any>{
    return this._HttpClient.delete(`http://aire.runasp.net/api/LuggageReports/delete-report/${id}`)
  }
}
