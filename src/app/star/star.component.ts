import { Component, OnChanges, Input } from '@angular/core'

//decoretor que informa que esta classe é um componente
@Component ({
  selector: 'app-star',
  templateUrl: 'star.component.html',
  styleUrls: ['./star.component.css']
})
//OnChanges funciona de forma assincrona, oq é importante se tratando de requisi
//coes http
export class StarComponent implements OnChanges {

  //Torna a variavel legivel a receber um valor de externo
  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnChanges(): void {
    //regra para exibicao das estrelas
    this.starWidth = this.rating * 74 / 5;
  }
}
