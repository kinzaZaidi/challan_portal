import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BankService {

  url: any;
  id: any;

  constructor( public httpClient: Http ) { 
    this.url = 'https://tcs-server.herokuapp.com/api/'
  }

  getChallan(id){
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.httpClient.get(this.url+'challan/'+id, {headers: headers})
    .map(function (res) {return res})
  }
}
