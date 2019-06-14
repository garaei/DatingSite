import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DatingService {

  constructor(private http: HttpClient) { }
  retrieveAllDatings(){
    return this.http.get<Dating>(`http://localhost:8080/dating/allDatings`);
   }
 
   deleteDating(id){
     return this.http.get<Dating>(`http://localhost:8080/dating/delete/${id}`);
    }
    retrieveDating(id){
     return this.http.get<Dating>(`http://localhost:8080/dating/retrieve/${id}`);
    }
    addDating(pos){
      return this.http.post<Dating>(`http://localhost:8080/dating/create`,pos);
    }
}
