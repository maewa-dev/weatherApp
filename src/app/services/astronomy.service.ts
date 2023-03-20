import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Astronomy } from '../interfaces/astronomy';

@Injectable({
  providedIn: 'root'
})
export class AstronomyService {

  _astro = new BehaviorSubject( {} );
  url: string = 'http://api.weatherapi.com/v1/astronomy.';
  format: string = 'json'; //xml
  apikey: string = '084ff68a23374743842160026231403';
  predeterminatedLocation:string = 'lanzarote'
  date: Date  = new Date
  
  constructor(private http: HttpClient) { 
    this.search(this.predeterminatedLocation)
  }

  getAstro(query:string): Observable<Astronomy | {}> {
    const url = `${ this.url }${ this.format }?key=${ this.apikey }&q=${ query }&dt=${ this.date.toISOString().split('T')[0] }`
    return this.http.get(url);
  }

  search(location:string) {
    this.getAstro(location).subscribe(resp => {
      console.log('desde service astro', resp)
      this._astro.next(resp)
    })
  }

  get astronomy():Observable<any> {
    return this._astro.asObservable();
  }
}
