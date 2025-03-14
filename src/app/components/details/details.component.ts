import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { AllreportService } from '../../services/allreport.service';
import { Ipackage } from '../../interfaces/ipackage';
import { IDetails } from '../../interfaces/i-details';
import { FormsModule } from '@angular/forms';
import { AddreportService } from '../../services/addreport.service';
import { Iship } from '../../interfaces/iship';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  selectedCampany:string=''
  Address:any
  item:boolean=false
  itemId:any
  DetailsArray:IDetails={} as IDetails
  shipingCost:any
  trackingNumber:any
  errMessage:any
  shiparray:Iship={} as Iship
  isReturn:boolean=false
  isShip:boolean=false


  

  constructor(private _ActivatedRoute:ActivatedRoute,private _AllreportService:AllreportService,private _AddreportService:AddreportService){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{this.itemId=res.get('id')
        console.log(res.get('id'));
        
      }
    })


   this._AllreportService.itemDatails(this.itemId).subscribe({
        next:(res)=>{console.log(res)
          this.DetailsArray=res
        }
      
      })
    
  }

  fclick(){
    this.item=true
  }

 shipItem(){
  const data ={
    shippingCompanyName:this.selectedCampany,
    deliveryAddress:this.Address
  }
  console.log(data);
  
  return this._AddreportService.shipItem(this.itemId,data).subscribe({
    next:(res)=>{console.log(res);
      this.shipingCost=res.shippingCost,
      this.trackingNumber=res.trackingNumber
      this.isReturn=true
    },
    error:(err)=>{console.log(err);


    }
  })
 }

 showDetails(){
  return this._AddreportService.showDetails(this.trackingNumber).subscribe({
    next:(res)=>{console.log(res);
      this.shiparray=res
       this.isShip=true
    },
    error:(err)=>{err}
  })
 }

 close(){
  this.isShip=false
 }


}
