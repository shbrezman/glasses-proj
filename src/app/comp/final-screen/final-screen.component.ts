import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-final-screen',
  templateUrl: './final-screen.component.html',
  styleUrls: ['./final-screen.component.css']
})
export class FinalScreenComponent implements OnInit {

  constructor(public purchaseService: PurchaseService) { }

  a;

  ngOnInit(): void {

    this.a = this.purchaseService.PurchaseDetail
    

  }

}
