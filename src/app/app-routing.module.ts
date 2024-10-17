import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { MarketpriceComponent } from './dashboard/marketprice/marketprice.component';
import { PracticeComponent } from './dashboard/practice/practice.component';
import { AdminsettingComponent } from './dashboard/adminsetting/adminsetting.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'admin',component:AdminComponent,
        children:[
          {path:'',redirectTo:'admin-dashboard',pathMatch:'full'},
          {path:'admin-dashboard',component:AdminDashboardComponent},
          {path:'weather',component:WeatherComponent},
          {path:'marketprice',component:MarketpriceComponent},
          {path:'practice', component:PracticeComponent},
          {path:'adminsetting',component:AdminsettingComponent},

        ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
