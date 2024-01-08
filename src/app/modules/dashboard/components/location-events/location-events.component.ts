import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelinaLocationsService } from '../../services/selina-locations.service';
import { Observable } from 'rxjs';
import { LocationEvent, SelinaLocation } from 'src/app/modules/models/location';

@Component({
  selector: 'app-location-events',
  templateUrl: './location-events.component.html',
  styleUrls: ['./location-events.component.css'],
})
export class LocationEventsComponent implements OnInit {
  /* -------------------------------- Variables ------------------------------- */

  selectedLocation: SelinaLocation | undefined;
  locationEvents: Array<LocationEvent> = [];
  filteredLocationEvents: Array<LocationEvent> = [];
  currentDate = new Date();
  startTs: number | undefined;
  endTs: number | undefined;

  /* ---------------------------------- Hooks --------------------------------- */

  constructor(private router: Router, private service: SelinaLocationsService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    const selectedLocation = localStorage.getItem('selectedLocation');
    if (!selectedLocation) this.router.navigate(['./']);

    this.selectedLocation = JSON.parse(selectedLocation!);
    this.getLocationEvents();
  }

  /* ----------------------------- Custom Methods ----------------------------- */

  // Get And Store  Location Events
  getLocationEvents() {
    this.service.getLocationEvents(this.selectedLocation!.id).subscribe((data: any) => {
      this.locationEvents = data.items;
      this.locationEvents = this.locationEvents.map((event) => ({ ...event, startTs: this.convertToTimestamp(event.startDate, event.startTime), endTs: this.convertToTimestamp(event.endDate, event.endTime) }));
    });
  }

 // Fetch Events Based On Date Range Selected
  dateSelected(dateTimeChange: any) {
    this.startTs = dateTimeChange.value[0].getTime();
    this.endTs = dateTimeChange.value[1].getTime();
    this.filteredLocationEvents = this.locationEvents.filter((event) => event.startTs <= this.endTs! && event.endTs >= this.startTs!);
  }

  /* ---------------------------------- Utils --------------------------------- */

  maxDate() {
    const currentDateTime = new Date();
    currentDateTime.setMonth(this.currentDate.getMonth() + 1);
    return currentDateTime;
  }

  convertToTimestamp(date: string, time: string) {
    const [year, month, day] = date.split('-').map(Number);
    const [hr, min] = time.split(':').map(Number);
    const dateObject = new Date(year, month - 1, day, hr, min);
    return dateObject.getTime();
  }

}
