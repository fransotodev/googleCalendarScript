## Before you start

My google cloud application is not published. You can create your own following https://developers.google.com/calendar/api/quickstart/nodejs and using this code instead

Expected folder structure

```
credentials/
    credentials.json
    token.json
modules/
    auths.js
    listEvents.js
index.js
```

## Usage
`npm run batch 2023-05-09 2023-05-10` to get a single result

`npm run daily 2023-05-09 2023-05-10` to get a result per day

On first usage, a browser window will open for you to select account and agree on using this application. This application uses a readonly permission in google calendar.

The results are aggregated on the first keyword in the calendar event. My recommendation is to classify your events per categories (work, fun time, exercise...)

## Example

```
--- 11:00
"[#exercise🏋️‍♂️] Run 10 kilometers"
--- 13:00
"[#IRL👨] lunch with friends"
---17:00
"[#entertainment📺] Watch Netflix"
---18:30
"[#IRL👨] family dinner"
--21:00
```

Result looks like:
```
{
    [#exercise🏋️‍♂️]: 2,
    [#IRL👨]: 6.5,
    [#entertainment📺]: 1.5
}
```