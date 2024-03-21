import IEvent from "src/types/i-event";
import events from "data/event-slide";
import ITestemonial from "src/types/i-testemonial";
import testimonials from "data/testemonials.json";


export function getEvents(): IEvent[] {
  return events;
}

export function getTestimonials(): ITestemonial[] {
  return testimonials;
}
