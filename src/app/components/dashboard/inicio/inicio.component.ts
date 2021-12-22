import {  AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ɵɵpureFunction1 } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Correo } from 'src/app/interfaces/correo';
import { CorreoService } from '../../../services/correo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RespuestaUsuarioComponent } from '../respuesta-usuario/respuesta-usuario.component';
import { PuenteService } from '../../../services/puente.service';
import { RespuestaUsuarioService } from '../../../services/respuesta-usuario.service';
import { respuesta } from '../../../interfaces/respuesta';





@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements  OnInit ,AfterViewInit {
  //Crear datos
  listarCorreos: Correo[] = [];
  listarRespuesta : any;
  cantidad: number = 0;


  //Datatable
  displayedColumns: string[] = ['id', 'email', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private CorreoService: CorreoService,
              private snackbar : MatSnackBar,
              private puente : PuenteService,
              private dialog: MatDialog,
              private RespuestaUsuarioService: RespuestaUsuarioService,
              
              ) {

  }



 //Filtro Datatable
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Funciones segun ciclo de vida de angular
  ngOnInit(): void {
    this.puente.disparadorPuente.subscribe(data =>{
      this.dataSource = new MatTableDataSource(data.data);
    })
    this.cargarCorreos()
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
   //Listado filtro antes y despues ya que la data carga en el Ngoinit
   ngAfterContentInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Funciones y peticiones a base
  //Listar correos
  cargarCorreos() {
    this.CorreoService.getCorreo().subscribe(data => {
      this.listarCorreos = data
      this.dataSource = new MatTableDataSource(this.listarCorreos);
    })

  }
//Eliminar correos
  eliminar(Correo:Correo){
    this.CorreoService.deleteCorreo(Correo).subscribe(data =>{
      this.cargarCorreos()
      this.snackbar.open('Correo Eliminado Exitosamente','',{
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    });
  }
  //Reenviar Correo
  reenviar(correo:string,id:number){
  this.CorreoService.reenviarEncuesta(id).subscribe(data => console.log(data))

    this.snackbar.open('Correo Reenviado a '+correo+' Exitosamente','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  respuestaUsuario(id:number): void {

    this.RespuestaUsuarioService.getRespuesta(id).subscribe(data => {
      this.puente.disparadorRespuesta.emit({
        data: this.listarRespuesta = data
      })
    })

    const  dialogRef = this.dialog.open(RespuestaUsuarioComponent, {
      height: 'auto'
    });

    dialogRef.afterClosed()
  }


}


