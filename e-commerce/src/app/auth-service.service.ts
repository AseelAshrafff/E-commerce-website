import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _HttpClient:HttpClient) { }
 
  register(userData:any):Observable<any>
  {
    return this._HttpClient.post("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/auth/signup", userData);

  }
}
