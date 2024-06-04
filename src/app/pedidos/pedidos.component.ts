import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  newPedido: Pedido = {
    cliente: '',
    producto: '',
    cantidad: 0
  };

  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService, private router: Router) {} // Inyecta el Router en el constructor

  ngOnInit() {
    this.loadPedidos();
  }

  loadPedidos() {
    this.pedidoService.getAllPedidos().subscribe(
      (data: Pedido[]) => {
        this.pedidos = data;
      },
      (error) => {
        console.error('Error fetching pedidos', error);
      }
    );
  }

  onSubmit() {
    if (!this.newPedido.cliente || !this.newPedido.producto || !this.newPedido.cantidad) {
      console.error('Todos los campos son obligatorios');
      return;
    }

    this.pedidoService.createPedido(this.newPedido).subscribe(
      (data: Pedido) => {
        // Agregar el pedido devuelto por el servidor a la lista de pedidos
        this.pedidos.push(data);
        
        // Reiniciar el formulario
        this.newPedido = { cliente: '', producto: '', cantidad: 0 };
      },
      (error) => {
        console.error('Error creando el pedido', error);
      }
    );
  }

  deletePedido(id: number) {
    this.pedidoService.deletePedido(id).subscribe(
      () => {
        this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
      },
      (error) => {
        console.error('Error deleting pedido', error);
      }
    );
  }
  
  goToHome() {
    // Redirigir al usuario a la página de inicio
    this.router.navigate(['/login']);
  }
  goToProductos() {
    // Redirigir al usuario a la página de inicio
    this.router.navigate(['/products']);
  }
}
