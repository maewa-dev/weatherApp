import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { emit } from 'process';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  _weather = new BehaviorSubject( {} );  //todo_mrt crear interfaz

  constructor(private http: HttpClient ) { 
    this.getWeather('lanzarote').subscribe(resp => {
      console.log('ahora siasde', resp)
      this._weather.next(resp)
    })
  }

  apikey: string = '084ff68a23374743842160026231403';
  url: string = 'http://api.weatherapi.com/v1/current.';
  format: string = 'json';
  aqi: string = 'no'; //yes

  getWeather(query:string): Observable<any> {
    const url = `${ this.url }${ this.format }?key=${ this.apikey }&q=${ query }&aqi=${ this.aqi }`
    return this.http.get(url);
  }

  get weather():any {
    return this._weather.asObservable();
  }

}
