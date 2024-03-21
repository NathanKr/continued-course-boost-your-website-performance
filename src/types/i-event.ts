import EventType from "./e-event-type";

export interface IUrl {
  href: string;
  text: string;
}

export default interface IEvent {
  type:EventType;
  startDt?: string;
  title: string;
  url?: IUrl;
  desc: string;
  location?: string;
}

export interface IEventWithPriority extends IEvent {
  imgPriority: boolean;
}
