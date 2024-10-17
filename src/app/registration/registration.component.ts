import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  pass:any;
  repass:any;
    constructor(
      private fb:FormBuilder,
      private api:ApiService,
      private router:Router,
    ){}
    add_data=this.fb.group({
      user_name:['',Validators.required],
      user_email:['',Validators.required],
      user_password:['',Validators.required],
      re_password:['',Validators.required]

})
onadd(){
  this.pass=this.add_data.value.user_password;
   this.repass=this.add_data.value.re_password;
   if (this.pass==this.repass) {
    this.api.postuser(this.add_data.value).subscribe(
      (res:any)=>{
        alert(res.message);
        this.router.navigate(['/home']);
        this.add_data.reset();
      })
   } else {
    alert("Password not match.....");
    this.add_data.reset();
   }
}
}