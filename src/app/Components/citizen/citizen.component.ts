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
  contactnum: String;
  cnic: String;
  licenseNo: String;
  
  constructor(
    private citizenService: CitizenService,
    private router:Router
  )  { }
  
  ngOnInit() {
  }
  
  onRegisterSubmit(){
  const citizen = {
    name: this.name,
    contactnum: this.contactnum,
    cnic: this.cnic,
    licenseNo: this.licenseNo
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