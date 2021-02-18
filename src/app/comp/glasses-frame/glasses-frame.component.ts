import { Component, OnInit } from '@angular/core';
import { FramesDataService } from 'src/app/services/frames-data.service';
import { frameModel } from 'src/app/models/frame.model';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-glasses-frame',
  templateUrl: './glasses-frame.component.html',
  styleUrls: ['./glasses-frame.component.css']
})
export class GlassesFrameComponent implements OnInit {

  constructor(private framesDataService: FramesDataService, private purchaseService: PurchaseService) { }

  frames: frameModel[] = [];
  ngOnInit(): void {
    this.frames = this.framesDataService.get();
    console.log(this.frames);

  }

  saveFrame(s: string){
    this.purchaseService.PurchaseDetail = this.frames[s];
    console.log(this.purchaseService.PurchaseDetail)
    
  }

  

}
