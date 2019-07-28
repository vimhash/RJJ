import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  move(id)
  {
	  this.swapBeginEndClass(id);
	  //document.getElementById(id).className = "end";
  }

  swapBeginEndClass(id)
  {
    var nod = document.getElementById(id);
    if (nod != null)
    {
      var new_class = "";
      var found = false;
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
  }

}
