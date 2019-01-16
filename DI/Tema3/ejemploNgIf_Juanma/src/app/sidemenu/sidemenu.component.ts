import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  titulo: string = 'Nuevo Usuario';
  usuario: Usuario;
  textoHint: String = '¿Qué estás pensando?';
  tipo = 'text';
  changeToNumber: boolean = true;
  textoAdivino: string = 'Lo sabía';

  constructor() { 
    setTimeout(() => {
      this.textoHint = 'Escribe algo no?';
    }, 4000); // Nº de milisegundos que espera para ejecutar el código
  }

  
  ngOnInit() {
    this.usuario = new Usuario('jm.vela94@gmail.com', 'juanma', '',24);


  }

  getAnyoNacimiento(usuario:Usuario){
    return 2018-usuario.age;
  }

  convType() {
    if(this.changeToNumber) {
      this.textoHint = 'Número';
      this.tipo = 'number';
    } else {
      this.textoHint = 'Texto';
      this.tipo = 'text';
    }

    this.changeToNumber = !this.changeToNumber;
  }

  resetAdivino() {
    this.textoAdivino = '';
  }
}
