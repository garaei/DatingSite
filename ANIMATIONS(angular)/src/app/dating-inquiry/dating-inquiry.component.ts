import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dating-inquiry',
  templateUrl: './dating-inquiry.component.html',
  styleUrls: ['./dating-inquiry.component.css']
})
export class DatingInquiryComponent implements OnInit {
  datingInquiryForm : FormGroup
  Submitted  =  false;
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {

    this.datingInquiryForm = this.formBuilder.group({
      photo: ['', Validators.required],
      fullname: ['',  [Validators.minLength(6), Validators.required]],
      phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      email: ['',  [Validators.required,Validators.email]],
     date : ['',  Validators.required],
      locality: ['', [Validators.required,Validators.min(4)]],
      employment : ['',  Validators.required],
      ethnicity : ['',  [Validators.required,Validators.minLength(5)]],
      likes : ['', [ Validators.required,Validators.minLength(5)]],

          });

          localStorage.clear();
  }
     // convenience getter for easy access to form fields
    get a() { return this.datingInquiryForm.get('photo'); }
    get b() { return this.datingInquiryForm.get('fullname'); }
    get c() { return this.datingInquiryForm.get('phone'); }
    get d() { return this.datingInquiryForm.get('email'); }
    get e() { return this.datingInquiryForm.get('date'); }
    get f() { return this.datingInquiryForm.get('locality'); }
    get g() { return this.datingInquiryForm.get('employment'); }
    get h() { return this.datingInquiryForm.get('ethnicity'); }
    get i() { return this.datingInquiryForm.get('likes'); }
    
    // METHOD TO POST THE DETAILS
datingPost(){
console.log('POSTING MY INQUIRY');

}
}
