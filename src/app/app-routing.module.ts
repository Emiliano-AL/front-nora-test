import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './shared/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'Home' },
    children:[
      {
        path: 'customer',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      }
    ]
  },
  {  path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
