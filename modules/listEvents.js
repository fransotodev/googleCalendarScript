const { google } = require("googleapis");

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
async function listEvents(auth, day, end) {
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

  if (!events || events.length === 0) {
    console.log("No upcoming events found.");
    return;
  }

  const result = events
    .filter((event) => event.summary.startsWith("[#"))
    .map((event) => {
      const start = event.start.dateTime || event.start.date;
      const end = event.end.dateTime || event.end.date;
      const startDate = new Date(start);
      const endDate = new Date(end);
      return {
        time: ((endDate - startDate) / 1000 / 60 / 15) * 0.25, //15 minutes as 0.25, 30 minutes as 0.5...
        type: event.summary.split(" ")[0],
      };
    })
    .reduce((accum, event) => {
      if (!accum[event.type]) {
        accum[event.type] = 0;
      }
      accum[event.type] += event.time;
      return accum;
    }, {});
  return result;
}

module.exports = {
  listEvents,
};
