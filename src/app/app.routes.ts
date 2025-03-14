import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LostComponent } from './components/lost/lost.component';
import { FoundComponent } from './components/found/found.component';
import { ReportlostComponent } from './components/reportlost/reportlost.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReportfoundComponent } from './components/reportfound/reportfound.component';
import { DetailsComponent } from './components/details/details.component';
import { ShipComponent } from './components/ship/ship.component';
import { LostDetailsComponent } from './components/lost-details/lost-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'auth',pathMatch:'full'},
   {path:'auth',component:AuthComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent , title:'login'},
    {path:'register',component:RegisterComponent,title:'register'}
   ]},

   {path:'main',component:MainComponent , title:'main',children:[
       {path:'',redirectTo:'home',pathMatch:'full'},  
       {path:'home',component:HomeComponent,title:'home'},
       {path:'lost' ,component:LostComponent,title:'lost'},
       {path:'found' ,component:FoundComponent,title:'found'},
       {path:'reportlost' ,component:ReportlostComponent,title:'ReportLost'},
       {path:'reportfound' ,component:ReportfoundComponent,title:'ReportLost'},
       {path:'details/:id',component:DetailsComponent,title:'Details'},
       {path:'losdetails/:id',component:LostDetailsComponent,title:'Lost Details'},
       {path:'ship',component:ShipComponent,title:'Ship Requests'}
       
     
   ]},
   {path:'**',component:NotfoundComponent,title:'Error404'}
];
