import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Map } from './map/map';
import { Marker } from './services/marker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Map],
  providers: [Marker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('leaflet');
}
