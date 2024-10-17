import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private router:Router,

  ){}
  add_data=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    message:['',Validators.required]
  })
  onsubmit(){
    this.api.feedpost(this.add_data.value).subscribe(
      (res:any)=>{
        alert(res.message);
        this.router.navigate(['/home']);
        this.add_data.reset();
      }
    )
  }
}
