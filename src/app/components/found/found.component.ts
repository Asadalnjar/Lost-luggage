import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { Ipackage } from '../../interfaces/ipackage';
import { Subscription } from 'rxjs';
import { AllreportService } from '../../services/allreport.service';
import { AddreportService } from '../../services/addreport.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-found',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './found.component.html',
  styleUrl: './found.component.css'
})
export class FoundComponent {
  foundarray!:Ipackage[]
  searchInput:any
    private subscirbe !:Subscription
    constructor(private _AllreportService:AllreportService ,private _AddreportService:AddreportService){}
  
  
   ngOnInit(): void {
     this.subscirbe=this._AllreportService.getAll().subscribe({
     next:(res)=>{console.log(res)
      
      this.foundarray=res
      
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
          this.foundarray=res
        },
        error:(err)=>{console.log(err);
        }
      })
    }
}
