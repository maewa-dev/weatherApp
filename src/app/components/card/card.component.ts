import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit, OnChanges {

  @Input() weather: Weather 

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void {
    console.log('de card al cargar change', this.weather)
    this.windDirection()
  }

  //todo_mrt mover a un pipe personalizado
  windDirection() {
    let windDirection = this.weather.current?.wind_dir
    console.log(windDirection)

    const windDirections: {[key:string]:string} = {
      N: 'North',
      NNE: 'North-Northeast',
      NE: 'Northeast',
      ENE: 'East-Northeast',
      E:'East',
      ESE: 'East-Southeast',
      SE: 'Southeast',
      SSE:'South-Southeast',
      S: 'South',
      SSW: 'South-Southwest',
      SW: 'Southwest',
      WSW: 'West-Southwest',
      W: 'West',
      WNW: 'West-Northwest',
      NW: 'Northwest',
      NNW: 'North-Northwest'
    }
    console.log('aqui esta wey', windDirections[windDirection]);
  }
}
