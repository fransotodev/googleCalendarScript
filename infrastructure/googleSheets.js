import {PROJECTS, TAGS} from "../domain/data.js";


export function printEventsGoogleSheets(events) {
    let output = "";

    //Project row
    PROJECTS.forEach((project) => {
        output += `\t${project}`;
    })
    output += "\n";

    //Each tag row
    TAGS.forEach((tag) => {
        output += `${tag}`;
        PROJECTS.forEach((project) => {
            let projectObject = events[project] ?? {}
            output += `\t${projectObject[tag]??0}`
        })
        output += "\n"
    })
    return output
}
