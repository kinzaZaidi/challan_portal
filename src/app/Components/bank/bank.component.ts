import { Component, OnInit } from '@angular/core';
import { BankService } from '../../Services/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  challan: any;

  constructor( private bank: BankService) { }

  ngOnInit() {
  }

  onSearch(id){
    this.bank.getChallan(id).subscribe((pay: any) =>{
      this.challan = pay.challan;
    });
    err =>{
      console.log(err);
      return false;
    }
  }
}
