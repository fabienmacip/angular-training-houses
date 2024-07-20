import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    title: 'House details',
    component: DetailsComponent,
  },
];

export default routeConfig;
