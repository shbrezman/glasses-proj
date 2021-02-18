import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-eye-measurements-screen',
  templateUrl: './eye-measurements-screen.component.html',
  styleUrls: ['./eye-measurements-screen.component.css']
})
export class EyeMeasurementsScreenComponent implements OnInit {

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
  }


  saveMeasurements(re, le, rec, lec){
    this.purchaseService.PurchaseDetail.re = re;
    this.purchaseService.PurchaseDetail.le = le;
    this.purchaseService.PurchaseDetail.rec = rec;
    this.purchaseService.PurchaseDetail.lec = lec;

    console.log(this.purchaseService.PurchaseDetail)
  }
}
