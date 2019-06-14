import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comments } from 'src/datingModels/comments.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
//view individual comments
retrieveOnId(id){
  return this.http.get<Comments>(`http://localhost:8080/dating/comments/commentsbyId/ + "/"+ comment.id`);

}
  //retrieve all comments(BOTH USERS AND ADMIN)
  retrieveAllComments(){
    return this.http.get<Comments[]>(`http://localhost:8080/dating/comments/allComments`);
   }
 //delete by id(ON ADMIN SIDE)
   deleteComment(comment){
     return this.http.delete<Comments>(`http://localhost:8080/dating/comments/delete/ + "/"+ comment.id`);
    }
   // delete by aurthor(ON USER SIDE TO DELETE HIS/HER OWN COMMENT)
    deleteCommentByAurthor(postedby){
      return this.http.delete<Comments>(`http://localhost:8080/dating/comments/delete/${postedby}`);
     }
     //view by date(BOTH ADMIN AND USERS)
    retrieveCommentsByDate(Comments){
     return this.http.get<Comments[]>(`http://localhost:8080/dating/comments/commentsbydate/ + "/"+ comment.date`);
    }
    //view by aurthor(ON USER SIDE TO VIEW HIS COMMENTS)
    retrieveCommentsByAurthor(postedby){
      return this.http.get<Comments>(`http://localhost:8080/dating/comments/commentsbyaurthor/ + "/"+ comment.postedby`);
     }
     //create comment(USERS SIDE)
    addComment(comments: Comments){
      return this.http.post<Comments>(`http://localhost:8080/dating/comments/create`, comments);
    }
}
