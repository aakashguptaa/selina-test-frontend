import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SelinaLocationsService } from '../../services/selina-locations.service';
import { SelinaCountries } from 'src/app/modules/models/location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NavigationBarComponent implements OnInit {
  /* -------------------------------- Variables ------------------------------- */
  selinaCountries: Array<SelinaCountries> = [];

  /* ---------------------------------- Hooks --------------------------------- */

  constructor(private selinaLocationsService: SelinaLocationsService, private router: Router) { }

  ngOnInit(): void {
    this.selinaLocationsService.locations.subscribe((locations) => this.groupByCountry(locations));
  }

  /* ----------------------------- Custom Methods ----------------------------- */

  goToLocationPage(location: any): void {
    localStorage.setItem('selectedLocation', JSON.stringify(location));
    this.router.navigate(['/location-details', location.id]);
  }


  groupByCountry(array: Array<any>) {
    const groupedByCountries = array.reduce(function (accumulator, currentObj) {
      (accumulator[currentObj?.country?.name] = accumulator[currentObj?.country?.name] || []).push(
        currentObj
      );
      return accumulator;
    }, {});

    this.selinaCountries = Object.keys(groupedByCountries).map((key) => ({ countryName: key, locations: groupedByCountries[key], showSubmenu: false }));
  }
}
