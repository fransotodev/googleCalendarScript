const process = require("process");
const { authorize } = require("./modules/auth");
const { listEvents } = require("./modules/listEvents");

function _addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

(async () => {
  const auth = await authorize();
  const mode = process.argv[2];
  let start = process.argv[3];
  const end = process.argv[4];

  if (mode === "batch") {
    console.log(`Batch Result ${start} to ${end}:`);
    const weeklyResult = await listEvents(auth, start, end);
    console.log(weeklyResult);
  }

  if (mode === "daily") {
    while (start <= end) {
      const startDate = new Date(start);
      const result = await listEvents(auth, start);
      console.log(start);
      console.log(result);
      start = _addDays(startDate, 1).toISOString().split("T")[0];
    }
  }
})();
