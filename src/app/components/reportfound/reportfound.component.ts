import { Component } from '@angular/core';
import { AddreportService } from '../../services/addreport.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reportfound',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reportfound.component.html',
  styleUrl: './reportfound.component.css'
})
export class ReportfoundComponent {
    resText:string=''
  
  formData: any = {
    Description: '',
    Location: '',
    Color: '',
    UniqueMarks: '',
    ReporterName: '',
    ReporterEmail: '',
    ReporterPhone: ''
  };
  selectedFile: File | null = null;
  
  
  constructor(private AddreportService:AddreportService) {}
  
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
    formData.append('Description', this.formData.Description);
    formData.append('Location', this.formData.Location);
    formData.append('Color', this.formData.Color);
    formData.append('UniqueMarks', this.formData.UniqueMarks);
    formData.append('ReporterName', this.formData.ReporterName);
    formData.append('ReporterEmail', this.formData.ReporterEmail);
    formData.append('ReporterPhone', this.formData.ReporterPhone);
    formData.append('Image', this.selectedFile);
  
    this.AddreportService.addFoundReport(formData).subscribe(
     {
      next:(res)=>{console.log(res)
        this.resText=res.message
      },
      error:(err)=>{console.log(err)}
     }
     
  );
 
 
  }


  
  


}
