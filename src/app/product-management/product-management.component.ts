import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para redireccionar a la página de inicio
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  newProduct: Product = {
    name: '',
    description: '',
    price: 0
  };

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {} // Inyecta el Router en el constructor

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  onSubmit() {
    if (!this.newProduct.name || !this.newProduct.description || !this.newProduct.price) {
      console.error('Todos los campos son obligatorios');
      return;
    }
  
    this.productService.createProduct(this.newProduct).subscribe(
      (data: Product) => {
        // Agregar el producto devuelto por el servidor a la lista de productos
        this.products.push(data);
        
        // Reiniciar el formulario
        this.newProduct = { name: '', description: '', price: 0 };
      },
      (error) => {
        console.error('Error creando el producto', error);
      }
    );
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter(product => product.id !== id);
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    );
  }

  goToHome() {
    // Redirigir al usuario a la página de inicio (reemplaza 'login' con la ruta adecuada si es diferente)
    this.router.navigate(['/login']);
  }
  
  goToPedidos() {
    // Redirigir al usuario a la página de pedidos
    this.router.navigate(['/pedidos']);
  }
  
}
