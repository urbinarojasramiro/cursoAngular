import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Capitán américa']  
  mostrarHeroe: string = '';
  borrarHeroe(): void{
    this.mostrarHeroe = this.heroes.shift() || '';
  }
}
