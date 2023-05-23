/**
 * Componente Angular para la página "Acerca de".
 *
 * Este componente representa la página "Acerca de" de la aplicación.
 * Contiene la estructura HTML y los estilos CSS asociados a esta página.
 */
import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
    this.searchService.getDealershipList().subscribe(
      dealershipData => {
        this.dealershipData = dealershipData;
        this.randomImages = this.getRandomImages();
      },
      error => {
        // Manejar el error en caso de que ocurra
        console.error('Error:', error);
      },
      () => {
        // Lógica cuando la suscripción se completa
        console.log('Suscripción completada');
      }
    );
  }
  getRandomImages(): string[] {
    const randomIndices: number[] = [];
    const numDealerships = this.dealershipData.length;
  
    while (randomIndices.length < numDealerships) {
      const randomIndex = Math.floor(Math.random() * this.dealershipImages.length);
      randomIndices.push(randomIndex);
    }
  
    return randomIndices.map(index => this.dealershipImages[index % this.dealershipImages.length]);
  }
  
}

