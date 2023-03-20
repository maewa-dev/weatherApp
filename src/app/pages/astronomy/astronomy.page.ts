import { Component, OnInit } from '@angular/core';
import { AstronomyService } from '../../services/astronomy.service';
import { Astronomy } from '../../interfaces/astronomy';

@Component({
  selector: 'app-astronomy',
  templateUrl: './astronomy.page.html',
  styleUrls: ['./astronomy.page.scss'],
})
export class AstronomyPage implements OnInit {

  constructor( private astronomyService: AstronomyService) { }

  astronomy: Astronomy; 


  ngOnInit() {
    this.astronomyService.astronomy.subscribe(resp => {
      this.astronomy = resp;
      console.log('resp de astro', resp)
    })
  }

}
