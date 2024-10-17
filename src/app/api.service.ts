import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
      baseurl="http://localhost/api1/";
  constructor(
    private http: HttpClient
  ) { }
  postuser(data:any){
      return this.http.post(this.baseurl +"insertdata.php",data);
  }
  feedpost(data:any){
    return this.http.post(this.baseurl+"feedback.php",data);
  }
}
