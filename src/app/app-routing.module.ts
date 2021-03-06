import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { CoscumparaturiComponent } from './coscumparaturi/coscumparaturi.component';
const routes: Routes = [
  {path:'home',component:HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:"/login",pathMatch:"full"},
  {path:'product',component:ProductComponent },
  {path:'coscumparaturi', component:CoscumparaturiComponent},
  {path:'**',pathMatch:'full', component:PageNotFoundComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[HomeComponent,PageNotFoundComponent,ProductComponent,CoscumparaturiComponent]