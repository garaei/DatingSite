import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm : FormGroup
  Submitted  =  false;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      
      username: ['',  [Validators.minLength(6), Validators.required]],
      
      email: ['',  [Validators.required,Validators.email]],
      password: ['',  [Validators.minLength(6), Validators.required]],
      conpassword: ['',  [Validators.minLength(6), Validators.required]]
          });

          localStorage.clear();
  }
     // convenience getter for easy access to form fields
    
    get f() { return this.forgotForm.get('email'); }
    get e() { return this.forgotForm.get('username'); }
    get a() { return this.forgotForm.get('password'); }
    get b() { return this.forgotForm.get('conpassword'); }
    
    // METHOD TO POST THE DETAILS
datingPost(){
console.log('POSTING MY INQUIRY');

}

}
