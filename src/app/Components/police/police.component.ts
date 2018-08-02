import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
name : String;
username: String;
email: String;
password: String;
contact: String;
cnic: String;
designation: String;

constructor(
  private authService:AuthService,
  private router:Router
)  { }

ngOnInit() {
}

onRegisterSubmit(){
const user = {
  name: this.name,
  email: this.email,
  username: this.username,
  password: this.password,
  contact: this.contact,
  cnic: this.cnic,
  designation: this.designation
}

this.authService.registerUser(user).subscribe(data =>{
if(data.success){
  this.router.navigate(['/']);
} else{
  this.router.navigate(['/bank']);
}
});
}
}