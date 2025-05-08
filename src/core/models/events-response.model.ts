import {EventsProjection} from "./events-projection.model";
import {Cycle} from './cycle.model';

export interface EventsResponseModel {
  eventsProjection: EventsProjection[];
  cycles: Cycle[];
}
