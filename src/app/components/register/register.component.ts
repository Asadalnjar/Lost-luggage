import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  loading:boolean=false
  resText!:string

  registerForm:FormGroup = new FormGroup({
    displayName:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z](?=.*[\W_])(?=.*\d.*\d.*\d).*$/)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phoneNumber:new FormControl(null ,[Validators.required,Validators.pattern(/^[0-9]{4,16}$/)]),
  })

  registerUser(){
    if(this.registerForm.valid){
      this.loading=true
      console.log(this.registerForm);
      //call register api 
      this._AuthService.registerUser(this.registerForm.value).subscribe({
       next:(res)=>{console.log(res);
        this._Router.navigate(['/auth/login'])
       },
       error:(err)=>{console.log(err);
        this.loading=false
       },
       complete:()=>{}
      })
    }
    else{
      this.registerForm.markAllAsTouched()
    }
    
  }

}
