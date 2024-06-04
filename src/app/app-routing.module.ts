import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { PedidosComponent } from './pedidos/pedidos.component'; // Importa el componente PedidosComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductManagementComponent },
  { path: 'pedidos', component: PedidosComponent }, // Agrega la ruta para el componente PedidosComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
