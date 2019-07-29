import { Component, OnInit } from '@angular/core';
import jsPDF from 'jsPDF';
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
    let  x=25;
    let y=25;
    let doc = new jsPDF({
      orientation: 'P',
      unit: 'mm',
      format: 'A4',
      compress: true,
    })
    doc.setFontSize(textSize);
    var headers = this.crear(["id", "instituto", "level", "telefono", "maquina", "vlt"]);
    doc.setFontStyle('normal');
    doc.setTextColor(55, 0, 0);
    doc.setFontStyle("italic")
    doc.table(1,1,this.generardata(100), headers,{ autoSize: true });
   doc.save('juanPDF.pdf')
  }
  generardata(n){
    var result=[];
    var data={
      id: "0",
      instituto: "Benito Juarez",
      level: "3Ro DS",
      telefono: "0990745612",
      maquina: "20485861",
      vlt: "0"
    };
    for(var i=0;i<n;i++){
      result.push(Object.assign({}, data));
      data.id = (i + 1).toString();
    }
    return result;
  }
  crear(llave){
    var result = [];
    for (var i = 0; i < llave.length; i += 1) {
        result.push({
        'id' : llave[i],
            'name': llave[i],
            'prompt': llave[i],
        });
    }
    return result;
  }

}
