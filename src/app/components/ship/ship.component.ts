import { Component, OnInit } from '@angular/core';
import { AllreportService } from '../../services/allreport.service';
import { Ireq } from '../../interfaces/ireq';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.css'
})
export class ShipComponent implements OnInit {
  searchinput:any
  isClick:boolean=false
  status:any
  id:any
  companyName:any
  message:any

  Array!:Ireq[]
  constructor(private _AllreportService:AllreportService){}

  ngOnInit(): void {
    this._AllreportService.getShiping().subscribe({
      next:(res)=>{console.log(res);
        this.Array=res
        this.Array.forEach(element => {
          console.log(element.id);
          this.id=element.id
          
        });
      },
      error:(err)=>{console.log(err);
      }
    })
  }

  fclick(){
    this.isClick=true
  }
  close(){
    this.isClick=false
   }
  

   updateStuts(){
    const Data={
      status:this.status
    }
    return this._AllreportService.updateStatus(this.id,Data).subscribe({
      next:(res)=>{console.log(res);
        this.message=res.message
      },
      error:(err)=>{err}
    })
   }
  
   search(){
    return this._AllreportService.search(this.companyName).subscribe({
      next:(res)=>{
        this.Array=res
      },
      error:(err)=>{console.log(err);
      }
    })
   }
  
   lo(){
    console.log(this.companyName);
    
   }
   


}
