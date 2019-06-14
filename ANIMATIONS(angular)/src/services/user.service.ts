import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/register/register.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // all the back end https
  private registerUrl= "http://localhost:8080/register"
  private loginUrl= "http://localhost:8080/login"

  constructor(private http: HttpClient) { }
  public signUpUser(user: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.registerUrl,user,httpOptions);
  }
  public signInUser(user: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json'
      })
    };
return this.http.post(this.loginUrl,user, httpOptions)
  }
}
