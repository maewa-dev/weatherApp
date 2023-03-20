import { Component, Input, OnInit } from '@angular/core';
import { Astronomy } from '../../interfaces/astronomy';

@Component({
  selector: 'app-astronomy-card',
  templateUrl: './astronomy-card.component.html',
  styleUrls: ['./astronomy-card.component.scss'],
})
export class AstronomyCardComponent  implements OnInit {

  @Input() astronomy: Astronomy 

  constructor() { }

  ngOnInit() {}

  ngOnChanges(): void {
    console.log('de astroCard al cargar change', this.astronomy)
  }
}
