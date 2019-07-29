import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {
  docPdf: jsPDF;

  constructor() { }

  ngOnInit() {
  }

  dataObjetos =
  [
    {
      id: "1",
      nombre: "Johao",
      apellido: "Perlaza",
      direccion: "Av. Pichincha",
      ciudad: "Quito",
      barrio: "San Blas"
    },
    {
      id: "1",
      nombre: "Johao",
      apellido: "Perlaza",
      direccion: "Av. Pichincha",
      ciudad: "Quito",
      barrio: "San Blas"
    },
    {
      id: "1",
      nombre: "Johao",
      apellido: "Perlaza",
      direccion: "Av. Pichincha",
      ciudad: "Quito",
      barrio: "San Blas"
    },
    {
      id: "1",
      nombre: "Johao",
      apellido: "Perlaza",
      direccion: "Av. Pichincha",
      ciudad: "Quito",
      barrio: "San Blas"
    },
    {
      id: "1",
      nombre: "Johao",
      apellido: "Perlaza",
      direccion: "Av. Pichincha",
      ciudad: "Quito",
      barrio: "San Blas"
    },
    {
      id: "1",
      nombre: "Johao",
      apellido: "Perlaza",
      direccion: "Av. Pichincha",
      ciudad: "Quito",
      barrio: "San Blas"
    }
  ]
  
  pdf() {
    let textSize=10;
    let anchoTotal=210
    let altoTotal=290
    let margenSup=25
    let margeninf=25
    let margeniz=25
    let margende= 25
    let anchouso= anchoTotal-margeniz-margende
    let altouso=altoTotal-margenSup-margeninf
    let x=25;
    let y=25;

    let doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'A4',
      compress: true,
    })
    // doc.setFontSize(textSize);
    // var headers = ["id", "nombre", "apellido", "direccion", "ciudad", "barrio"];
    // doc.setFontStyle('normal');
    // doc.setTextColor(55, 0, 0);
    // doc.setFontStyle("italic")
    // doc.table(x,y,this.dataArray, headers, object);
    // doc.save('tablasPDF.pdf')
    var headers = {id: "id",nombre: "nombre",apellido: "apellido",direccion: "direccion",ciudad: "ciudad",barrio: "barrio"};
    doc.autoTable({
      head: [headers],
      body: this.dataObjetos, colSpan: 2, rowSpan: 2, styles: {halign: 'center'},
    })
    doc.save('tablasPDF.pdf')
  }
}
