## Usage
`npm run batch 2023-05-09 2023-05-10` to get a single result
`npm run daily 2023-05-09 2023-05-10` to get a result per day

On first usage, a browser window will open for you to select account and agree on using this application. This application uses a readonly permission in google calendar.

The results are aggregated on the first keyword in the calendar event.

## Example

```
--- 11:00
"[#exercise🏋️‍♂️] Run 10 kilometers"
--- 13:00
"[#IRL👨] lunch with friends"
---17:00
"[#entertainment📺] Watch Netflix"
---18:30
```

Results in:
```
{
    [#exercise🏋️‍♂️]: 2,
    [#IRL👨]: 4,
    [#entertainment📺]: 1.5
}
```