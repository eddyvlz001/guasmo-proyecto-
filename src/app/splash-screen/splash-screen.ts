import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash-screen.html',
  styleUrls: ['./splash-screen.css']
})
export class SplashScreen implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Espera hasta que termine la animación (~2.7s), luego redirige
    setTimeout(() => {
      this.router.navigate(['/auth/login']); // Cambia '/login' por la ruta deseada
    }, 3000);
  }
}