import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Popup } from './popup';

@Injectable({
  providedIn: 'root'
})

export class Marker {

  constructor(private popupService: Popup) {  }

  public makeMarker(map: L.Map): void {
    const marker = L.marker([50.36890, 20.88820]);

    marker.bindPopup(this.popupService.makePopup("test"));

    marker.addTo(map);
  }
}