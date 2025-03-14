import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddreportService {

  constructor(private _HttpClient:HttpClient) { }

  addLostReport(LostData:object):Observable<any>{
    return this._HttpClient.post('http://aire.runasp.net/api/LuggageReports/report-lost',LostData)
  }

  
  addFoundReport(FoundData:object):Observable<any>{
    return this._HttpClient.post('http://aire.runasp.net/api/LuggageReports/report-found',FoundData)
  }

  searchReport( color:string):Observable<any>{
    return this._HttpClient.get(`http://aire.runasp.net/api/LuggageReports/search-reports?color=${color}`)
  }

  shipItem(id:number ,data:any):Observable<any>{
    return this._HttpClient.post(`http://aire.runasp.net/api/ShippingRequests/ship-luggage/${id}`,data)
  }

  showDetails(trackingNumber:any):Observable<any>{
    return this._HttpClient.get(`http://aire.runasp.net/api/ShippingRequests/details?trackingNumber=${trackingNumber}`)
  }
}
