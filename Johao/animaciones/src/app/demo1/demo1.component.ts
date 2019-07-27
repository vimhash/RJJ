import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  id: String

  constructor() { }

  ngOnInit() {
  }

  move(id)
  {
	  this.swapBeginEndClass(id);
  }

  swapBeginEndClass(id)
  {
	var nod = document.getElementById(id);
	if (nod != null)
	{
		var new_class = "";
		var found = false;
		// alert(JSON.stringify(nod.classList));			//classList: selecciona todas las clases de la etiqueta
		for (var i=0; i<nod.classList.length; i++)
		{
			var clas = nod.classList[i];
			if (clas == "end")
			{
				clas = "begin";
				found = true;
			}
			else if (clas == "begin")
			{
				clas = "end";
				found = true;
			}
			new_class += " " + clas;
		}
		if (!found)
			new_class += " " + "end";
		nod.setAttribute("class", new_class);
		
	}
	// alert(JSON.stringify(nod.classList));
}

}
