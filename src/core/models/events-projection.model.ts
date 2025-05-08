import {EventCounts} from '../models/events-counts.model';

export interface EventsProjection {
  day: number;
  events: EventCounts;
}
