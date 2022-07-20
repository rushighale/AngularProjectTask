import { JsonPipe } from '@angular/common';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const USERID = "userId"

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }


    
  // localhost:9090/api/v1/auth/login

  url = "https://test2.jeeni.in/mytask/user/authenticate"
 // url ="http://localhost:9090/api/v1/auth/login"

  url2="https://test2.jeeni.in/mytask/taskDailyAssign/getStandUpReport"


  //1.  calling the server to generate token
  generateToken(credentials: any) {
    // token generate

    return this.http.post(`${this.url}`, credentials)
  }







  // set login user

  // loginUser(tokenInfo: string) {
  //   localStorage.setItem("tokenInfo", tokenInfo)
  // }


  //2.  set login usr by using token
  loginUser(tokenInfo: any) {
    localStorage.setItem("tokenInfo", JSON.stringify(tokenInfo))
  }

  




  //3.  to check user is loggedIn
  isLoggedIn() {
    let token = localStorage.getItem("tokenInfo");

    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }


  getTokenInfo():any {
    return localStorage.getItem("tokenInfo")
  }




  // 4. saving userId to localstorage

  saveuserId(userId:any){
    localStorage.setItem("userId", userId)
  }
  getuserId():any{
    localStorage.getItem("userId");
  }
  //  getToken() {
  //   let str :String | null
  //   str =localStorage.getItem("tokenInfo");
  //   return JSON.parse(str);
  // }




  





  // getToken():any {
  //   let str=localStorage.getItem("tokenInfo");
  //   return  JSON.parse(str)
  
  // }

  // 5. getting project tasks
  getTasksbyparam(userId:any):Observable<any>{
    let param1=new HttpParams().set('userId',userId)
   
    return this.http.get(`${this.url2}`,{params:param1})

  }

  
}
