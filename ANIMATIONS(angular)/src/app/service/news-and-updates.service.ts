import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Comments } from 'src/datingModels/comments.model';
import { News } from 'src/datingModels/news.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class NewsAndUpdatesService {

  constructor(private http: HttpClient) { }

    //retrieve all news
    retrieveAllNews(){
      return this.http.get<News[]>(`http://localhost:8080/dating/news/allNews`);
     }
   //delete news by id
     deleteNews(news){
       return this.http.delete(`http://localhost:8080/dating/news/delete+ "/"+ news.id`);
      }
     // delete news by  aurthor
      deleteNewsByAurthor(news){
        return this.http.delete(`http://localhost:8080/dating/news/delete + "/"+ news.postedby`);
       }
       //view news by date
      retrieveNews(){
       return this.http.get<News[]>(`http://localhost:8080/dating/news/newsbydate + "/"+ news.date`);
      }
      //view news by aurthor
      retrieveNewsByAurthor(){
        return this.http.get<News[]>(`http://localhost:8080/dating/news/newsbyaurthor + "/"+ news.postedby`);
       }
       //create news
      addNews(news: News){
        return this.http.post<Comments>(`http://localhost:8080/dating/news/create`, news);
      }
}
