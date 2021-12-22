import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from '../agregar/agregar.component';
import { respuesta } from '../../../interfaces/respuesta';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private fileService: RespuestaService,
              private snackBar: MatSnackBar,
              private router: Router,
              private cookieService:CookieService
             ) { }



  ngOnInit(): void {
  }

  openDialog(): void {
    const  dialogRef = this.dialog.open(AgregarComponent, {
      height: '180px',
      width: '460px'

    });

    dialogRef.afterClosed()
  }

  downloadExcel(): void {
    this.snackBar.open('Tu descarga empezara pronto','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    setTimeout(() => {
      //Descargar despues de 1.5s
      const fileName = `reporte_${Math.random()}.xlsx`;
      this.fileService.getReport().subscribe(response => {
        this.manageExcelFile(response, fileName);
      });

    
    }, 1500);

    


  }

  manageExcelFile(response: any, fileName: string): void {
    debugger;
    const dataType = response.type;
    const binaryData = [];
    binaryData.push(response);
    
    const filtePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
    const downloadLink = document.createElement('a');
    downloadLink.href = filtePath;
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }


}


