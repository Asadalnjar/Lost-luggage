import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllreportService } from '../../services/allreport.service';
import { RouterLink } from '@angular/router';

import { Subscription } from 'rxjs';
import { Ipackage } from '../../interfaces/ipackage';
import { AddreportService } from '../../services/addreport.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lost',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.css'
})
export class LostComponent implements OnInit ,OnDestroy  {
  searchInput:any
  lostArray!:Ipackage[]
  private subscirbe !:Subscription
  constructor(private _AllreportService:AllreportService,private _AddreportService:AddreportService){}


 ngOnInit(): void {
   this.subscirbe=this._AllreportService.getAll().subscribe({
   next:(res)=>{console.log(res)
    this.lostArray=res
   }
   })
  }

  ngOnDestroy(): void {
   if(this.subscirbe){
    this.subscirbe.unsubscribe()
   }
  }
  

  searchLost(){
    return this._AddreportService.searchReport(this.searchInput).subscribe({
      next:(res)=>{console.log(res);
        this.lostArray=res
      },
      error:(err)=>{console.log(err);
      }
    })
  }

}
