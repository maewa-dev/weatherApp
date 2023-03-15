import { Component, OnInit} from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent  implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  handleLocation(location:string) {
    this.weatherService.search(location)
  }

  onKeyPressed(event: any) {
    if (event.keyCode == 13) {
      let location = event.target.value;
      this.handleLocation(location)
    }
  }

}
