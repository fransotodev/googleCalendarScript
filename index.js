import process from "process"

import {authorize} from "./modules/auth.js"
import {getEvents} from "./infrastructure/googleCalendar.js"
import {processEvents2D} from "./domain/eventProcessor.js"
import {printEventsGoogleSheets} from "./infrastructure/googleSheets.js"
import clipboard from "clipboardy";


(async () => {
  const auth = await authorize();
  let start = process.argv[2];
  const end = process.argv[3];

  console.log(`Result ${start} to ${end}:`);
  const weeklyEvents = await getEvents(auth, start, end);
  // console.log(weeklyEvents);
  const [processedEvents, unsupportedTags] = processEvents2D(weeklyEvents);
  const eventsToPrint = printEventsGoogleSheets(processedEvents)
  console.log(eventsToPrint); //TODO: Pretty-print this in terminal
  clipboard.writeSync(eventsToPrint)

  console.log("== Unsupported tags ==")
  console.log(unsupportedTags);
  console.log("== Processed tags ==")
  console.log(processedEvents);

})();
