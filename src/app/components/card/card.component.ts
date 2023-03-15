import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() prueba1: Weather 


 weather: Weather ;

  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.weather.subscribe((resp:Weather) => {
      this.weather = resp;
    })
  }
}
