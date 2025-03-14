import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllreportService } from '../../services/allreport.service';
import { AddreportService } from '../../services/addreport.service';
import { IDetails } from '../../interfaces/i-details';

@Component({
  selector: 'app-lost-details',
  standalone: true,
  imports: [],
  templateUrl: './lost-details.component.html',
  styleUrl: './lost-details.component.css'
})
export class LostDetailsComponent {
  itemId:any
  DetailsArray:IDetails={} as IDetails
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
}
