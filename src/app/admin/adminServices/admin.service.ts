import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  public api = {
    login: "https://ziqzaq.az/api/admin/login"
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*'})
  };

  public adminLogin(data) {
    
    return this.http.post(this.api.login,data);

  }

  constructor( public http: HttpClient ) { }

}
