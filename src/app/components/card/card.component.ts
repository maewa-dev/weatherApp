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
  }

}
