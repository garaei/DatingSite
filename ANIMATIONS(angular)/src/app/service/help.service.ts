import { Injectable } from '@angular/core';
import { Help } from 'src/datingModels/help.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http: HttpClient) { }

    //retrieve all problems
    retrieveAllProblems(){
      return this.http.get<Help>(`http://localhost:8080/dating/problem/allproblems`);
     }
   //delete  problem by id
     deleteProblem(id){
       return this.http.get<Help>(`http://localhost:8080/dating/problem/delete/${id}`);
      }

       //view  problem by date
      retrieveProblem(date){
       return this.http.get<Help>(`http://localhost:8080/dating/problem/allproblems/${date}`);
      }
      //view problem by aurthor'email
      retrieveProblemByAurthor(email){
        return this.http.get<Help>(`http://localhost:8080/dating/problem/problembyaurthor/${email}`);
       }
       //create  problem
      addProblem(help: Help){
        return this.http.post<Help>(`http://localhost:8080/dating/problem/create`, help);
      }

}
