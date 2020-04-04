import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre    : string   = 'Enrique Moreno';
  public nombre2    : string   = 'EnRiQue MorEno';
  public arreglo   : number[] = [1,2,3,4,5,6,7,8,9,10];
  public PI        : number   = Math.PI;
  public porcentaje: number   = 0.234;
  public salario   : number   = 1234.5;

  public heroe = {
    name: 'Enrique Moreno',
    age: 33,
    address: {
      street: 'Guevara Argentina',
      nro: 102
    }
  };

  public valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  public fecha = new Date();
  public idioma: string = 'en';
  public videoUrl: string = 'https://www.youtube.com/embed/kPLP4OV-c5E';
}
