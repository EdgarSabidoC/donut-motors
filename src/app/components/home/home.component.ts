/**
 * Componente Angular para la página de inicio de la aplicación.
 *
 * Este componente representa la página de inicio de la aplicación.
 * Contiene la estructura HTML y los estilos CSS asociados a la página de inicio.
 */
import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/services/search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cars!: any; // Lista de autos
  dealershipData!: any;
  dealershipImages: string[] = [
    '../assets/img/shared/dealership_00.jpg',
    '../assets/img/shared/dealership_01.jpg',
    '../assets/img/shared/dealership_02.jpg',
    '../assets/img/shared/dealership_03.jpg',
    '../assets/img/shared/dealership_04.jpg',
    '../assets/img/shared/dealership_05.jpg',
    // Agrega más rutas de imágenes aquí...
  ];

  randomImages: string[] = []; // Lista de imágenes aleatorias

  constructor(private searchService: SearchService) {
  }
  ngOnInit(): void {
    this.searchService.getCarList().subscribe(
      cars => {
        this.cars = cars;
      },
      error => {
        // Aquí manejas el error en caso de que ocurra
        console.error('Error:', error);
      },
      () => {
        // Aquí manejas la lógica cuando la suscripción se completa
        console.log('Suscripción completada');
      }
    );
    this.searchService.getDealershipList().subscribe(
      dealershipData => {
        this.dealershipData = dealershipData;
        this.randomImages = this.getRandomImages(); // Obtener una imagen aleatoria al recibir los datos del concesionario
      },
      error => {
        // Aquí manejas el error en caso de que ocurra
        console.error('Error:', error);
      },
      () => {
        // Aquí manejas la lógica cuando la suscripción se completa
        console.log('Suscripción completada');
      }
    );
  }
  getCarGroups() {
    const carGroups = [];
    const iterations = Math.ceil(9 / (this.cars?.length || 1)); // Verificar si this.cars está definido
    
    for (let i = 0; i < iterations; i++) {
      const carGroup = this.cars?.slice(i * 3, (i + 1) * 3) || []; // Verificar si this.cars está definido
      if (carGroup.length < 3) {
        carGroup.push(...(this.cars?.slice(0, 3 - carGroup.length) || [])); // Verificar si this.cars está definido
      }
      carGroups.push(carGroup);
    }
    
    return carGroups;
  }
  getDealerships() {
    return this.dealershipData ? this.dealershipData.slice(0, 3) : [];
  }

  getRandomImages(): string[] {
    const randomIndices: number[] = [];

    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * this.dealershipImages.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    return randomIndices.map(index => this.dealershipImages[index]);
  }
  
}

