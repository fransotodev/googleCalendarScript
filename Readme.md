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
`npm run hours 2023-05-09 2023-05-10`

On first usage, a browser window will open for you to select account and agree on using this application. This application uses a readonly permission in google calendar.

The results are aggregated on the first keyword in the calendar event. My recommendation is to classify your events per categories (work, fun time, exercise...)

This is a 2 dimensional aggregation (project x activity).
To configure them, check data.js

## Example

```
--- 11:00
"[#l🙆‍♂️] [#ex🏋️‍♂️] Run 10 kilometers"
--- 13:00
"[#l🙆‍♂️] [#irl👨] lunch with friends"
---17:00
"[#l🙆‍♂️] [#e📺] Watch Netflix"
---18:30
"[#cgp👟] [#a🎟️] Document"
--21:00
```

The activities would be:
```
{
    [#ex🏋️‍♂️]: 2,
    [#irl👨]: 4,
    [#e📺]: 1.5,
    [#a🎟️] 2.5
}
```

And the projects would be
```
{
    [#l🙆‍♂️]: 7.5,
    [#a🎟️] 2.5
}
```
