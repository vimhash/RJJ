import { Component } from '@angular/core';
import jsPDF from 'jsPDF';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PDFs';
  docPdf:jsPDF;

  constructor() { }

  ngOnInit() {
  }
  pdf(){
    let x = 25
    let y = 25
    let altoTotal=290
    let anchoTotal=210
    const marDer=25
    const marIzq=25
    const marSup=25
    const marInf=25
    let interlineado=1
    let anchoUso= anchoTotal-marIzq-marDer
    let altoUso=altoTotal-marSup-marInf
    let textSize=16
    let ancho=50
    let texto1='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularasddddsdsd.'
    let doc=new jsPDF({
      orientation:'P',
      unit:'mm',
      format: 'A4',
      compress:true,
    })
    doc.setFontSize(textSize);
    for(let i=0;i<=20;i++){
      let espacio = doc.splitTextToSize(texto1,altoUso);
      if(x==25){
        doc.text(espacio,x,y,{maxWidth:ancho},interlineado)
        var dim = doc.getStringUnitWidth('espacio')*textSize;
        var anchoParrafo= Math.ceil(dim)+(textSize*0.3515)*interlineado;
        x+= anchoParrafo
      }else if(x<anchoUso){
        anchoParrafo = Math.ceil(dim)+(textSize*0.3515)*interlineado;
        if((x+anchoParrafo)<anchoUso){
          doc.text(espacio,x,y,{maxWidth:ancho},anchoParrafo)
          x+=anchoParrafo
        }else{
          doc.text(espacio,x,y,{maxWidth:ancho})
          x+=anchoParrafo
          doc.addPage()
          y=25
          x=25
        }
      }
    }
    // for(let i=0;i<=20;i++){
    //   let lineas = doc.splitTextToSize(texto,anchoUso);
    //   if(y==25){
    //     doc.text(lineas,x,y,{maxWidth:ancho})
    //     var dim=doc.getTextDimensions(lineas);
    //     var altoParrafo= Math.ceil(dim.h)+(textSize*0.3515)*interlineado;
    //     y+= altoParrafo
    //     x+=anchoParrafo
    //   }else if(y<altoUso){
    //     altoParrafo = Math.ceil(dim.h)+(textSize*0.3515)*interlineado;
    //     if((y+altoParrafo)<altoUso){
    //       doc.text(lineas,x,y,{maxWidth:50})
    //       y+=altoParrafo
    //       x+=anchoParrafo
    //     }else{
    //       doc.text(lineas,x,y,{maxWidth:50})
    //       y+=altoParrafo
    //       doc.addPage()
    //       y=25
    //     }
    //   }
    // }
  doc.save('parrafoPDF.pdf')
  }
}
