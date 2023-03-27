import { Component,OnInit } from '@angular/core';
import { About } from '../about';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit{

  aboutform = new About();
  constructor(){}
  ngOnInit(): void { }

  about():void{
    console.log(this.aboutform);

    alert("Thank Your for valuable time we reach out to you soon");
  }

}

