import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelinaLocationsService {

  locations:BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  getAllLocations():Observable<Array<any>>{
   return this.httpClient.get<Array<any>>(environment.getLocationApi)
  }

  getLocationEvents(locationId:string):Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${environment.getLocationEventsApi}?locationID=${locationId}`)
  }

}
