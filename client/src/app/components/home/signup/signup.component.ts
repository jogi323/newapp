import { Component, OnInit } from '@angular/core';
import{AppService} from "../../../app.service";
import{Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:signup_data;
data;
  constructor(private signupService:AppService,private router:Router) { 
    this.user={
      name:"",
      password:"",
      confirmpaswprd:"",
      email:"",
    }
  }

  ngOnInit() {
    
  }
  singup(user){
    this.signupService.url="http://localhost:3000/users/register";
    this.signupService.data=user;
    this.signupService.postService().subscribe(res=>{
      console.log(res);
      this.data=res["_body"];
      console.log(this.data);
      if(this.data==0){
        this.router.navigate([""]);
      }
    })
  }

}
export class signup_data{
  name:string;
  password:string;
  confirmpaswprd:string;
  email:string;
}