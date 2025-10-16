import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements AfterViewInit {

  private mapLeaflet: L.Map | undefined;

  private initMap():void {
    this.mapLeaflet = L.map('map',{
      center:[ 39.8282, -98.5795 ],
      zoom: 3
    });
  
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.mapLeaflet);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }


}
