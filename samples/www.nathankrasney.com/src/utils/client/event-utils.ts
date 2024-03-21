import EventType from "src/types/e-event-type";
import IEvent from "src/types/i-event";
import ISalesApi from "src/types/sales/i-sales-api";

export function filterEvents(events: IEvent[], isSaleDay: boolean) {
  return events.filter(
    (e) => !(e.type == EventType.flashSale24hr && !isSaleDay)
  );
}

export function getFromReactQuery(data: unknown) : boolean {
  let isSaleDay = false;
  if ((data as ISalesApi)?.isSalesDay) {
    isSaleDay = true;
  }
  return isSaleDay;
}
