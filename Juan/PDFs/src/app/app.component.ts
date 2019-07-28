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
    let textoArray=['jose','juan','lenin','Paola']
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
    let texto='El gigante del dance belga es, sin duda, el emperador de Europa y cada año atrae a amantes de la música electrónica de todo el mundo con sus famosos escenarios, producción visual y un cartel a rebosar de grandes nombres desde EDM hasta hardstyle. El festival ha organizado otros eventos en los cinco continentes, pero la fiesta original en la ciudad de Boom será siempre la más característica.'
    let doc=new jsPDF({
      orientation:'P',
      unit:'mm',
      format: 'A4',
      compress:true,
    })
    doc.setFontSize(textSize);
    for(let i=0;i<=20;i++){
      let lineas = doc.splitTextToSize(texto,anchoUso);
      if(y==25){
        doc.text(lineas,x,y,{maxWidth:50})
        var dim=doc.getTextDimensions(lineas);
        var altoParrafo= Math.ceil(dim.h)+(textSize*0.3515)*interlineado;
        y+= altoParrafo;
        var anchoParrafo= Math.ceil(dim.h);
        x+= anchoParrafo;
      }else if(y<altoUso){
        altoParrafo = Math.ceil(dim.h)+(textSize*0.3515)*interlineado;
        if((y+altoParrafo)<altoUso){
          doc.text(lineas,x,y,{maxWidth:50})
          y+=altoParrafo
          x+=anchoParrafo
        }else{
          doc.text(lineas,x,y,{maxWidth:50})
          y+=altoParrafo
          doc.addPage()
          y=25
        }
      }
    }
  doc.save('juanPDF.pdf')
  }
}
