import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import {FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {Validators} from '@angular/forms';

export class User {
constructor(
  email: string,
firstname: string,
username: string,
lastname: string,
confirmpassword: string,
password: string
){}

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm : FormGroup
Submitted  =  false;
loading = false;
user: User[]

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService : UserService) { }
 
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required,Validators.minLength(3)]],
      lastname: ['',  [Validators.required,Validators.minLength(3)]],
      username: ['' , [Validators.minLength(6), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [ Validators.minLength(6), Validators.required]],
     
      confirmpassword: ['', Validators.required ]
    });
  }
      // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; 
      }
      //register method
  registerUser(){

this.userService.signUpUser(this.registerForm.value)
.subscribe( data => {console.log(data);
  if(data.valid){
    this.registerForm.reset();
    this.router.navigate(['/login']);
      }
    
    });
   
 
  }
  onSubmit(){
    this.registerUser();
  }

}
