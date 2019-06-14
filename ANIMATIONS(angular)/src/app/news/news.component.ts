import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsForm : FormGroup
  Submitted  =  false;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.newsForm = this.formBuilder.group({
      
      title: ['',  [Validators.minLength(6), Validators.required]],
      
      postedby: ['',  Validators.required],
      newsfile: ['',   Validators.required],
      news: ['',  [Validators.minLength(6), Validators.required]]
          });

          localStorage.clear();
  }
     // convenience getter for easy access to form fields
    
    get g() { return this.newsForm.get('postedby'); }
    get b() { return this.newsForm.get('title'); }
    get a() { return this.newsForm.get('newsfile'); }
    get f() { return this.newsForm.get('news'); }
    get s() { return this.newsForm.get('date'); }
    
    // METHOD TO POST THE DETAILS
newsPost(){
console.log('POSTING MY INQUIRY');

}

}
