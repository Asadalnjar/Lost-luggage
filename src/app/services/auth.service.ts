import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }



  registerUser(userData: object): Observable<any> {
    return this._HttpClient.post('http://reco.runasp.net/api/account/register', userData);
  }

  loginUser(userData:object):Observable<any>{
   return this._HttpClient.post('http://reco.runasp.net/api/account/login',userData)
  }
}
