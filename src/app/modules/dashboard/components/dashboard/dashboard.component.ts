import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SelinaLocationsService } from '../../services/selina-locations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private selinaLocationsService:SelinaLocationsService){}

  ngOnInit(): void {
    this.selinaLocationsService.getAllLocations().subscribe((locations:any) => this.selinaLocationsService.locations.next(locations));
  }
 }
