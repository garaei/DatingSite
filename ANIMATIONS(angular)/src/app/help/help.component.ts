import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  helpForm : FormGroup
  Submitted  =  false;
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.helpForm = this.formBuilder.group({
      
      problem: ['',  [Validators.minLength(6), Validators.required]],
      phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      email: ['',  [Validators.required,Validators.email]],
      date: [new Date()]
          });

          localStorage.clear();
  }
     // convenience getter for easy access to form fields
    
    get f() { return this.helpForm.get('problem'); }
    get c() { return this.helpForm.get('phone'); }
    get e() { return this.helpForm.get('email'); }
   
    
    // METHOD TO POST THE DETAILS
problemPost(){
console.log('POSTING MY PROBLEM');

}

}
