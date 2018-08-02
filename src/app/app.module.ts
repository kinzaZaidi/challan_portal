import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BankComponent } from './Components/bank/bank.component';
import { PoliceComponent } from './Components/police/police.component';
import { CitizenComponent } from './Components/citizen/citizen.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { BankService } from './Services/bank.service';
import { CitizenService } from './Services/citizen.service';

const appRoutes : Routes = [
  {path:'', component : HomeComponent},
  {path:'bank', component : BankComponent},
  {path:'police', component : PoliceComponent},
  {path: 'citizen', component: CitizenComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankComponent,
    PoliceComponent,
    CitizenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, BankService, CitizenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
