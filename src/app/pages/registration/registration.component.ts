import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user=new User();
  msg:any='';
  alert:boolean=false;

  constructor(private service:RegistrationService) { }

  ngOnInit(): void {
  }

  registerUser(){
  
  this.service.registerUsers(this.user).subscribe(data=>{
    console.log("Response Recieved");
    // this.alert=true;
    alert("Successfully registered!!");
  },
    
    error=>{
      console.log("Exception occured");
      this.alert=true;
      this.msg=error.error;
      console.log("MESSAGE"+this.msg);
    })
   
  }

}
