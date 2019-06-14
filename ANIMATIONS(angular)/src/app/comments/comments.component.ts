import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
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
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsForm : FormGroup
  Submitted  =  false;
  loading = false;
  comment: Comments;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private commentServ: CommentsService) { }

  ngOnInit() {
    this.commentsForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.min(3)]],
      date: ['',  Validators.required],
      comment: ['', [Validators.required,Validators.min(3)]],
    });
  }
     // convenience getter for easy access to form fields
     get a() { return this.commentsForm.get('name'); }
     get b() { return this.commentsForm.get('date'); }
     get c() { return this.commentsForm.get('comment'); }

     postComment(){
       this.Submitted=true;
        this.commentServ.addComment(this.comment).subscribe( data => {
  alert("Comment successfully posted.");
        });
       
     }
}
