import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      photo: ['', Validators.required],
      fullname: ['',  [Validators.minLength(6), Validators.required]],
      dob: ['', Validators.required],
      hobbies: ['',  [Validators.required,Validators.min(5)]],
      likes: ['',  [Validators.required,Validators.min(5)]],
      uaself: ['', [Validators.required,Validators.min(5)]]

          });

          localStorage.clear();
  }
     // convenience getter for easy access to form fields
    get a() { return this.userForm.get('photo'); }
    get b() { return this.userForm.get('fullname'); }
    get c() { return this.userForm.get('dob'); }
    get d() { return this.userForm.get('hobbies'); }
    get e() { return this.userForm.get('likes'); }
    get f() { return this.userForm.get('uaself'); }
    
// for uploading the details of user account
userUploadDetails(){

}
}
