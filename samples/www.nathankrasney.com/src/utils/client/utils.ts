import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export function formatDuration(
  milliseconds: number,
  expired = "Expired"
): string {
  const durationObject = dayjs.duration(milliseconds);

  const days = Math.floor(durationObject.as("days"));
  const hours = durationObject.hours();
  const minutes = durationObject.minutes();
  const seconds = durationObject.seconds();

  const parts = [];

  if (days >= 1) {
    parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (seconds > 0) parts.push(`${seconds}s`);
  } else if (hours >= 1) {
    parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (seconds > 0) parts.push(`${seconds}s`);
  } else if (minutes >= 1) {
    parts.push(`${minutes}m`);
    if (seconds > 0) parts.push(`${seconds}s`);
  } else if (seconds >= 1) {
    parts.push(`${seconds}s`);
  }

  return parts.length > 0 ? parts.join(" ") : expired;
}
