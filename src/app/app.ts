import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Map } from './map/map';
import { Marker } from './services/marker';
import { Popup } from './services/popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Map],
  providers: [
    Marker,
    Popup
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('leaflet');
}
