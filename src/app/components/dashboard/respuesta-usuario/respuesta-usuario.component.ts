import { Component, OnInit } from '@angular/core';
import { PuenteService } from 'src/app/services/puente.service';
import { RespuestaUsuarioService } from '../../../services/respuesta-usuario.service';



@Component({
  selector: 'app-respuesta-usuario',
  templateUrl: './respuesta-usuario.component.html',
  styleUrls: ['./respuesta-usuario.component.css']
})
export class RespuestaUsuarioComponent implements OnInit {

    dataTable = true;
    noData = false;

  respuesta :any;

  displayedColumns: string[] = [
  'Fecha',
  'Nombre completo cliente',
  'Campaña (CECO)',
  'Área en la que se desempeña',
  'PO con quien trabajó el proyecto',
  'Gerente quien recibió el requerimiento',
  '¿Me encuentro satisfecho con el producto/desarrollo/servicio entregado?',
  '¿El tiempo tomado en el requerimiento de este producto/desarrollo/servicio fue adecuado?',
  '¿El tiempo tomado para desarrollar el producto/desarrollo/servicio fue adecuado',
  '¿Qué tan receptivo ha sido nuestro equipo de servicio al cliente a sus preguntas y preocupaciones?',
  '¿Me encuentro satisfecho con la compañía, en general?',
  '¿Nuestros productos y servicios superaron sus expectativas',
  'De acuerdo a su experiencia, ¿estaría dispuesto a recomendar a Montechelo a un colega o amigo?',
  'comentarios',];
  dataSource : any;
  constructor(private RespuestaUsuarioService: RespuestaUsuarioService,
              private puente : PuenteService,                                                         
    ) { }

  ngOnInit(): void {
    this.puente.disparadorRespuesta.subscribe(data =>{
      
      this.dataSource = data.data

      if(this.dataSource.length <= 0){
        this.dataTable = false;
        this.noData = true;
      }
      
    })
    
  }



}
