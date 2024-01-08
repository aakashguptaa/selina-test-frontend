import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SelinaLocationsService } from '../../services/selina-locations.service';
import { Router } from '@angular/router';
import { SelinaLocation } from 'src/app/modules/models/location';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css'],
})
export class BottomBarComponent implements OnInit {
  /* -------------------------------- Variables ------------------------------- */
  locations: Array<SelinaLocation> = [];
  shuffledLocations: Array<SelinaLocation> = [];

  /* ---------------------------------- Hooks --------------------------------- */

  constructor(private selinaLocationsService: SelinaLocationsService, private router: Router) { }


  ngOnInit(): void {
    this.selinaLocationsService.locations.subscribe((locations) => {
      this.locations = locations;
      this.setRandomLocations();
    });
  }

  /* ----------------------------- Custom Methods ----------------------------- */

  setRandomLocations() {
    if (this.shuffledLocations.length) return;
    const shuffledArray = this.locations.slice().sort(() => Math.random() - 0.5); // Shuffle the array
    this.shuffledLocations = shuffledArray.slice(0, 3);
  }

  goToLocationPage(location: any): void {
    localStorage.setItem('selectedLocation', JSON.stringify(location));
    this.router.navigate(['/location-details', location.id]);
  }


}
