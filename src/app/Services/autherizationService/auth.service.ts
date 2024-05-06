import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient:HttpClient) { }


  setLogin(loginData:object):Observable<any>{

return this._httpclient.post(`${environment.baseURL}/api/account/login`,loginData);

  }
}
