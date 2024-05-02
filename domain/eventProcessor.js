import { PROJECTS, TAGS } from "./data.js";

function _getEventTime(event) {
  const start = event.start.dateTime || event.start.date;
  const end = event.end.dateTime || event.end.date;
  const startDate = new Date(start);
  const endDate = new Date(end);
  return ((endDate - startDate) / 1000 / 60 / 15) * 0.25; //15 minutes as 0.25, 30 minutes as 0.5...
}

export function processEvents2D(events) {
  const timeTrackingEvents = events.filter((event) =>
    event.summary.startsWith("[#")
  );

  const resultMap = {};
  const untaggedResultMap = {}

  timeTrackingEvents.forEach((event) => {
    let [project, tag, description] = event.summary.split(" ");
    const eventTime = _getEventTime(event);
    console.log(project, tag, eventTime)
    if (PROJECTS.indexOf(project) === -1) {
        console.log("Unknown project: ", project);
        tag = project;
        project = "no-project";
    }
    if(TAGS.indexOf(tag) === -1) {
        if (!untaggedResultMap[project]) {
            untaggedResultMap[project] = {};
          }
          if (!untaggedResultMap[project][tag]) {
            untaggedResultMap[project][tag] = 0;
          }
          untaggedResultMap[project][tag] = untaggedResultMap[project][tag] + eventTime;

        tag = "no-tag"
    }
    //Known projects
    if (!resultMap[project]) {
      resultMap[project] = {};
    }
    if (!resultMap[project][tag]) {
      resultMap[project][tag] = 0;
    }
    resultMap[project][tag] = resultMap[project][tag] + eventTime;
  });
  return [resultMap, untaggedResultMap];
}
