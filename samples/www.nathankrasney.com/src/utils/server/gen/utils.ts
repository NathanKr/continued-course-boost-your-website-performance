import dayjs from "dayjs";

export function millisecondsUntilEndOfDay(): number {
    const now = dayjs();
    const endOfDay = now.endOf('day');
    const millisecondsLeft = endOfDay.diff(now);
  
    return millisecondsLeft;
  }

  export function isProduction() : boolean{
    const env = process.env.NODE_ENV;
    return env === "production"
}