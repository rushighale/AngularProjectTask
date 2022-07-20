import { Component, OnInit } from '@angular/core';
import { Result } from '../model/Result';
import { TodaysTasksEntity } from '../model/TodaysTasksEntity';
import { Weather } from '../model/Weather';
import { YesterdaysPlannedTasksEntity } from '../model/YesterdaysPlannedTasksEntity';

import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 userId:any

data:any;


  // public todaystask:any[]=[]
 // public task:Result[] ={} as Result[];

tasks:Weather[] ={} as Weather[];
todaysTasks:TodaysTasksEntity[] ={} as TodaysTasksEntity[];
yesterdaysTasks:YesterdaysPlannedTasksEntity[] ={} as YesterdaysPlannedTasksEntity[];








  constructor(private service:UserServiceService) { }

  ngOnInit(): void {

    // 1. getting id 
// this.userId=this.service.getuserId()
//    console.log(this.userId)
  
this.userId=localStorage.getItem("userId")
console.log(this.userId)


   // 2.getting all tasks
    this.service.getTasksbyparam(this.userId).subscribe((data)=>{
      console.log(data)
      console.log(data.result.todaysTasks)
      this.tasks=data
      this.todaysTasks=data.result.todaysTasks
      this.yesterdaysTasks=data.result.yesterdaysTasks
    

    },
    error=>{
      console.log(error)
    });



    
  }

}
