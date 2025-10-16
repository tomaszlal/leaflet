import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements AfterViewInit {

  private mapLeaflet: L.Map = L.map('map');

  private initMap():void {
    this.mapLeaflet = L.map('map',{
      center:[ 39.8282, -98.5795 ],
      zoom: 3
    });
  
  }

  ngAfterViewInit(): void {
    this.initMap();
  }


}
