import { Component } from '@angular/core';
import { Product } from './produc-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myStore';
  nombre = "aaron";

  btnvalor = true

  ngName = ""

  palabras : string[]= ["ala","te" , "jodes"] 
  palabra :string = ""


  productos: Product[] = [
    {
      name:"aleatorio",
      price:1111,
      img :"https://api.lorem.space/image/movie?w=150&h=220"
    },
    {
      name:"aleatorio",
      price:1111,
      img :"https://api.lorem.space/image/movie?w=150&h=220"
    },
    {
      name:"aleatorio",
      price:1111,
      img :"https://api.lorem.space/image/movie?w=150&h=220"
    },
    {
      name:"aleatorio",
      price:1111,
      img :"https://api.lorem.space/image/movie?w=150&h=220"
    },
    {
      name:"aleatorio",
      price:1111,
      img :"https://api.lorem.space/image/movie?w=150&h=220"
    },
    {
      name:"aleatorio",
      price:1111,
      img :"https://api.lorem.space/image/movie?w=150&h=220"
    },
    {
      name:"aleatorio",
      price:1111,
      img :"https://api.lorem.space/image/movie?w=150&h=220"
    },
  ] 


 

  chanlleName(event : Event){
    const element = event.target as HTMLInputElement;

    this.nombre = element.value
  }

  newPalabra(){
    this.palabras.push(this.palabra)
    this.palabra =""
  }

  deletePalabra(index : number){
    this.palabras.splice(index,1)
  }
}
