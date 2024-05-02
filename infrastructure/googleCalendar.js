import { google } from "googleapis"

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
export async function getEvents(auth, day, end) {
  const calendar = google.calendar({ version: "v3", auth });
  const res = await calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    maxResults: 250,
    singleEvents: true,
    orderBy: "startTime",
    timeMin: `${day}T00:00:00+02:00`,
    timeMax: `${end ? end : day}T23:59:59+02:00`,
  });
  const events = res.data.items;

  return events
}