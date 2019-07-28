import { Component } from '@angular/core';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PDFs';
  
  constructor(){
  }

  ngOnInit(){
  }
  pdf(){
    let  x=25;
    let y=25;
   const sizeMilimetros=  0.3515; //valor por cada punto
   let  size=16;
   const interlineado=1;
   let texto='AnimeFLV.NET, tiene como objetivo brindarte un amplio catálogo de animes que no son transmitidos en los canales de TV en señal abierta, teniendo como fin el compartir con todos nuestros seguidores la mayor cantidad de episodios y series anime que salen cada año . Conocemos nuestras   limitaciones y es por ello que siempre intentamos innovar   en la calidad del servicio, tratamos mes a mes de hacer   alianzas comerciales con las mejores empresas a modo de   poder brindarte una mejor experiencia y evolucionar como   plataforma para así muy pronto visualizar vídeos de  Anime Online de manera Legal.'
    let anchoTotal=210
    let altoTotal=290
    let margenSup=25
    let margeninf=25
    let margeniz=25
    let margende= 25
    let anchouso= anchoTotal-margeniz-margende
   let altouso=altoTotal-margenSup-margeninf
   let doc = new jsPDF({
     orientacion : 'L', //l o p
     unit:'mm',
     format:'a4',
     compres:true,
     
     
   })//espaciado de parrafos dinamico
   doc.setFontSize(size);
    for(let i=0;i<=20;i++){
      var lineas = doc.splitTextToSize(texto,anchouso);
      console.log(lineas.length)
      if(y==25){
        doc.text(lineas,x,y)
        var dim=doc.getTextDimensions(lineas);
        var altoParrafo= Math.ceil(dim.h)+(size*sizeMilimetros)*interlineado;
        y+= altoParrafo;
      }else if(y<altouso){
        altoParrafo = Math.ceil(dim.h)+(size*sizeMilimetros)*interlineado;
        if((y+altoParrafo)<altouso){
          for(var j =0 ; j<=altoParrafo;j++){
            doc.text(lineas, x, y)
            y+=altoParrafo
          }
          doc.text(lineas, x, y)
          y+=altoParrafo
          doc.addPage()
        }else{
          doc.text(lineas, x, y)
          y+=altoParrafo
        }
        }
      }

   doc.save('roger.pdf')
 }
}

