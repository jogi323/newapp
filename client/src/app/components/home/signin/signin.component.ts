import { Component, OnInit } from '@angular/core';
import{AppService} from "../../../app.service";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user:signin_data;
data;
  constructor(private signinService:AppService) {
    this.user={
      email:'',
      password:'',
    }
   }

  ngOnInit() {
  }
  singin(user){
    this.signinService.url="http://localhost:3000/users/login";
    this.signinService.data=user;
    this.signinService.postService().subscribe(res=>{
      console.log(res);
      this.data=res["_body"];
      console.log(this.data);
    })
  }

}
export class signin_data{
  email:string;
  password:string;
}