import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'Home', pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'About',component:AboutComponent},
    {path:'Services',component:ServicesComponent},
    {path:'Cars',component:CarsComponent},
    {path:'Contact',component:ContactComponent},
    {path:'**',component:NotFoundComponent}

]
