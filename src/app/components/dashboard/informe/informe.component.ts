import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {




  view: [number,number] = [1200, 600];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  explodeSlices: boolean = true;
  legendPosition: string = 'Right';


  single = [
    {
      "name": "¿Me encuentro satisfecho con el producto/desarrollo/servicio entregado?",
      "value": 4.5
    },
    {
      "name": "¿Me encuentro satisfecho con el producto/desarrollo/servicio entregado?",
      "value": 4.3
    },
    {
      "name": "¿Me encuentro satisfecho con el producto/desarrollo/servicio entregado?",
      "value": 3.5
    },
      {
      "name": "¿Qué tan receptivo ha sido nuestro equipo de servicio al cliente a sus preguntas y preocupaciones?",
      "value": 4.5
    }
    ,
      {
      "name": "¿Me encuentro satisfecho con la compañía, en general?",
      "value": 4.3
    }
    ,
      {
      "name": "¿Nuestros productos y servicios superaron sus expectativas?",
      "value": 3.8
    }
    ,
      {
      "name": "De acuerdo a su experiencia, ¿estaría dispuesto a recomendar a Montechelo a un colega o amigo?",
      "value": 2.5
    }
  ];

  constructor() {
    //Object.assign(this, { single });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  ngOnInit(): void {
  }

}
