import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  loading:boolean=false
  resText!:string

  loginFrom:FormGroup = new FormGroup({
    
      password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Za-z](?=.*[\W_])(?=.*\d.*\d.*\d).*$/)]),
      email:new FormControl(null,[Validators.required,Validators.email])
    })
  
    loginUser(){
      
      if(this.loginFrom.valid){
        this.loading=true
        console.log(this.loginFrom);
        this._AuthService.loginUser(this.loginFrom.value).subscribe({
          next:(res)=>{console.log(res);
            this.loading=false
            this.resText=res.message
           this._Router.navigate(['/main/home'])
            sessionStorage.setItem('token',res.token) 
            console.log(res.token)
          },
          error:(err)=>{console.log(err);
            this.loading=false
            this.resText=err.error.message 
          }
        })
      }
      else{
        this.loginFrom.markAllAsTouched()
      }
      
      
    }

  
  
  
  

    

}
