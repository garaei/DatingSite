import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class News {
 
  id: number;
  date: Date;
  title: string;
  news: string;
  postedby: string;
  newsfile: string;
}
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-user-view-news',
  templateUrl: './user-view-news.component.html',
  styleUrls: ['./user-view-news.component.css']
})
export class UserViewNewsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  //CALLING THE MODEL
  news: News[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  
  
  }
}
