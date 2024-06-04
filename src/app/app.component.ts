// app.component.ts
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
