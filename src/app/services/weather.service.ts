import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../interfaces/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  _weather = new BehaviorSubject( {} );
  predeterminatedLocation:string = 'lanzarote'

  constructor(private http: HttpClient ) { 
    this.search(this.predeterminatedLocation)
  }

  apikey: string = '084ff68a23374743842160026231403';
  url: string = 'http://api.weatherapi.com/v1/current.';
  format: string = 'json';
  aqi: string = 'no'; //yes

  getWeather(query:string): Observable<Weather | {}> {
    const url = `${ this.url }${ this.format }?key=${ this.apikey }&q=${ query }&aqi=${ this.aqi }`
    return this.http.get(url);
  }

  get weather():Observable<any> {
    return this._weather.asObservable();
  }

  search(location:string) {
    this.getWeather(location).subscribe(resp => {
      console.log('desde service', resp)
      this._weather.next(resp)
    })
  }
}
