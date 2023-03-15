import { Component } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weather: Weather ;
  
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit() {
    this.weatherService.weather.subscribe((resp:Weather) => {
      this.weather = resp;
    })
  }

}
