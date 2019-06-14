import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentsService } from '../service/comments.service';
export class Comments {
  id: number;
  comment: string;
  date: string;
  postedby: string;
}
@Component({
  selector: 'app-user-view-all-comments',
  templateUrl: './user-view-all-comments.component.html',
  styleUrls: ['./user-view-all-comments.component.css']
})
export class UserViewAllCommentsComponent implements OnInit {
comments: Comments;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private commentServ: CommentsService) { }

  ngOnInit() {
  }
  // view all comments
  viweAllComments(){
this.commentServ.retrieveAllComments(this.comments).subscribe();
  }
// view own comment
  viewOwnComments(){
    this.commentServ.retrieveCommentsByAurthor(this.comments).subscribe();
  }

  //to delete own comments
  deleteOwnComment(){
    this.commentServ.deleteCommentByAurthor(this.comments).subscribe();
  }
  // view comments by date
viewCommentsByDate(){
this.commentServ.retrieveCommentsByDate(this.comments).subscribe();
  }
}
