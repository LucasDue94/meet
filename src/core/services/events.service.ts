import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EventsResponseModel} from '../models/events-response.model';
import {mockData} from '../mocks/data';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  getEvents(): Observable<EventsResponseModel> {
    return of(mockData)
  }
}
