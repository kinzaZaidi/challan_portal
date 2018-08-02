import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CitizenService } from '../../Services/citizen.service';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {
  name : String;
  username: String;
  email: String;
  password: String;
  contact: String;
  cnic: String;
  designation: String;
  
  constructor(
    private citizenService: CitizenService,
    private router:Router
  )  { }
  
  ngOnInit() {
  }
  
  onRegisterSubmit(){
  const citizen = {
    name: this.name,
    email: this.email,
    username: this.username,
    password: this.password,
    contact: this.contact,
    cnic: this.cnic,
    designation: this.designation
  }
  
  this.citizenService.registerUser(citizen).subscribe(data =>{
  if(data.success){
    this.router.navigate(['/']);
  } else{
    this.router.navigate(['/bank']);
  }
  });
  }
  }