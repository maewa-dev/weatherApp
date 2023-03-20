import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { Astronomy } from '../../interfaces/astronomy';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent  implements OnInit, OnChanges {

  @Input() location: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log('location aqui', this.location)
  }
}
