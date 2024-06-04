import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '', // Nombre de usuario quemado
    password: '' // Contraseña quemada
  };

  constructor(private router: Router) {}

  submitLoginForm() {
    // Verificar si las credenciales son correctas
    if (this.credentials.username === 'admin' && this.credentials.password === '123') {
      // Redirigir a la página de productos si las credenciales son correctas
      this.router.navigateByUrl('/products');
    } else {
      // Si las credenciales son incorrectas, puedes mostrar un mensaje de error o hacer otra acción
      console.error('Credenciales incorrectas');
    }
  }
}
