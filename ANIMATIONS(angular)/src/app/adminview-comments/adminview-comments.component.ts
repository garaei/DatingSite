import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentsService } from '../service/comments.service';
import { timingSafeEqual } from 'crypto';
export class Comments {
 
  id: number;
  comment: string;
  date: string;
  postedby: string;
}
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-adminview-comments',
  templateUrl: './adminview-comments.component.html',
  styleUrls: ['./adminview-comments.component.css']
})
export class AdminviewCommentsComponent implements OnInit {
comments: Comments;
dtOptions: DataTables.Settings = {};
//CALLING THE MODEL
comm: Comments[];
  constructor(private formBuilder: FormBuilder,
    private router: Router, private commentServ: CommentsService) { }

  ngOnInit() {
    //view all comments

this.commentServ.retrieveAllComments().subscribe(data => {
  this.comm = data;
});
  }
// delete a comment by id
deleteCommentById(){
this.commentServ.deleteComment(this.comments).subscribe();
}

//view comments on a date criteria
viewCommentsByDate(){
this.commentServ.retrieveCommentsByDate(this.comments).subscribe(data =>{
  this.comm = data;
});
}


}
