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

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BankService } from './Services/bank.service';

const appRoutes : Routes = [
  {path:'', component : HomeComponent},
  {path:'bank', component : BankComponent},
  {path:'police', component : PoliceComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankComponent,
    PoliceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
  ],
  providers: [ValidateService, AuthService, BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
