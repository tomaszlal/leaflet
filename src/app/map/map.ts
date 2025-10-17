import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Marker } from '../services/marker';
@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})

export class Map implements AfterViewInit {

  private mapLeaflet: L.Map | undefined;

  constructor(private markerService: Marker) { }

  private initMap(): void {
    this.mapLeaflet = L.map('map', {
      center: [50.36890480721421, 20.888200318686998],
      zoom: 15
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
    this.markerService.makeMarker(this.mapLeaflet as L.Map);
  }
}