import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  PurchaseDetail:{
    img: string,
    brand: string,
    details: string,
    lensType: string,
    re: string,
    le: string,
    rec: string,
    lec: string
  }

  constructor() {
    this.PurchaseDetail = {
      img: '',
      brand: '',
      details: '',
      lensType: '',
      re: '',      
      le: '',      
      rec:'',
      lec:''
        }
   }
}
