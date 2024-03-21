import EventType from "src/types/e-event-type";
import IEvent from "src/types/i-event";
import { MID_COURSE_PRICE_USD } from "src/utils/common/constants";

const events: IEvent[] = [
  {
    type: EventType.flashSale24hr,
    title: "24-Hour Flash Sale",
    desc: `All Courses at ${MID_COURSE_PRICE_USD}$`,
  },
  {
    type: EventType.regular,
    title: "My new online course 'Boost Your Website Performance' is due 30/Apr/2024 on Udemy",
    desc: "Course : 'Boost Your Website Performance'",
  },
];

export default events;
