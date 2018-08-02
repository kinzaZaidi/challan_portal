import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CitizenService {
  
  url = "https://tcs-server.herokuapp.com/api/";

  constructor( private http: Http ) { }
    
  registerUser(citizen){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post(this.url+'citizen', citizen, {headers: headers})
  .map(res => res.json());
  }
}