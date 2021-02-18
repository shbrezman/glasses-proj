import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-lens-screen',
  templateUrl: './lens-screen.component.html',
  styleUrls: ['./lens-screen.component.css']
})
export class LensScreenComponent implements OnInit {

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
  }

  saveLensType(s: string){
     this.purchaseService.PurchaseDetail.lensType = s;
      console.log(this.purchaseService.PurchaseDetail)
    
    
  }

}
