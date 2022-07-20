import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:"",
    password:""
  }

  constructor( private service:UserServiceService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    // console.log(this.credentials)

    console.log("form submitted")

    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != '' && this.credentials.password != null)) {


      this.service.generateToken(this.credentials).subscribe((response: any) => {
        console.log(response)
        // console.log(response.result);
        // console.log(response.result.userId);

        //this.service.saveuserId(response.result.userId)

        localStorage.setItem('userId',response.result.userId)
        console.log("login successfully")

        // let id=localStorage.getItem('userId')
        // console.log("id =>")
        // console.log(id)

     
        this.service.loginUser(response)
         window.location.href='/dashboard'
      },
        error => {
          alert('something went wrong')
          console.log(error);
        })

    } else {
      console.log("Fields are empty")
    }
  }


  }


