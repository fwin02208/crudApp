import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UserServiceService {
  constructor(private http: Http) { }
  getMethod() : Observable<any> {
    return this.http.get('./assets/data.json')
     
    
  }
}
