import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AddreportService } from '../../services/addreport.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-reportlost',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reportlost.component.html',
  styleUrl: './reportlost.component.css'
})
export class ReportlostComponent {

  resText:string=''
  errText:boolean=false

 formData: any = {
  FlightNumber: '',
  Description: '',
  Location: '',
  Color: '',
  UniqueMarks: '',
  ReporterName: '',
  ReporterEmail: '',
  ReporterPhone: ''
};
selectedFile: File | null = null;


constructor(private AddreportService: AddreportService) {}

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}

onSubmit(event: Event) {
  event.preventDefault(); 

  if (!this.selectedFile) {
    
    return;
  } 

  const formData = new FormData();
  formData.append('FlightNumber', this.formData.FlightNumber);
  formData.append('Description', this.formData.Description);
  formData.append('Location', this.formData.Location);
  formData.append('Color', this.formData.Color);
  formData.append('UniqueMarks', this.formData.UniqueMarks);
  formData.append('ReporterName', this.formData.ReporterName);
  formData.append('ReporterEmail', this.formData.ReporterEmail);
  formData.append('ReporterPhone', this.formData.ReporterPhone);
  formData.append('Image', this.selectedFile);

  this.AddreportService.addLostReport(formData).subscribe(
   {
    next:(res)=>{console.log(res)
      this.resText=res.message
      this.errText=false
    },
    error:(err)=>{console.log(err)
      this.errText=true
    }
    
  }
   
   
);

console.log(formData);

}



}
