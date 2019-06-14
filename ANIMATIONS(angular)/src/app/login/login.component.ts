import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators} from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;


 
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.minLength(6), Validators.required]],
      password: ['',  [Validators.minLength(6), Validators.required]]
          });

          localStorage.clear();
 
  }
    // convenience getter for easy access to form fields

    //for username
  get f() { return this.loginForm.get('username'); 
  }
  //for password
  get e() { return this.loginForm.get('password'); 
}
  //logging method

  login(){
    this.submitted= true;
    this.userService.signInUser(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        if(data.valid){
localStorage.setItem('isLoggedin', 'true');
alert("welcome");
this.router.navigate(['/userdashboard']);
        }

        // else if((this.loginForm.get(username')==='admin') && f==='admin123'){
        //   this.router.navigate(['/admindashboard']);
        // } 
        else{
          console.log('denied access')
          alert("Please Log in");
        }
      }
    );

  }

}
