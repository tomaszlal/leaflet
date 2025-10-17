import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class Marker {

  public makeMarker(map: L.Map): void {
    const marker = L.marker([50.36890, 20.88820]);
    marker.addTo(map);
  }
}