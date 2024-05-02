import clipboard from "clipboardy"

function formatForGoogleSheets(obj) {
    let output = '';
  
    // Extract keys and sort them alphabetically
    const sortedKeys = Object.keys(obj).sort();
  
    // Concatenate key-value pairs with tabs
    sortedKeys.forEach(key => {
      output += `${key}\t${obj[key]}\n`;
    });
  
    return output;
  }
  
  // Example usage:
  const myObject = {
    b: 2,
    c: 3,
    a: 1
  };
  
//   const formattedOutput = formatForGoogleSheets(myObject);
//   console.log(formattedOutput);



  const array = [
    "[#study📚]",
    "[#online-content📖]  ",
    "[#entertainment📺] ",
    "[#entertainment-100%Fun🐲] ",
    "[#writing✍️]  ",
    "[#speaking🔊]  ",
    "[#Code🐊]",
    "[#task🏆] ",
    "[#meeting💬] ",
    "[#review👀] ",
    "[#social-shallow🚀]",
    "[#admin🎟️] ",
    "[#lost💨] ",
    "[#Chores🧹] ",
    "[#IRL👨] ",
    "[#Commute🏃‍♂️]",
    "[#mindfulness🙈]",
    ]
    // array.sort()
    // let output = ""
    // array.forEach((element) => {
    //     output+=`${element}\n`
    // })
    // console.log(output)

    let i = 0;
    let j = 0;
    let output = "";
    const letterArray = ["B", "C", "D", "E", "F"]
    for(j = 2 ; j <= 18 ; j++){
        const letter = letterArray[j];
        for(i = 1 ; i <= 53 ; i++){
            if(i < 10){
                output+=`='W0${i}'!G${j}`
            } else {
                output+=`='W${i}'!G${j}`
            }
            output+="\t"
        }
        output+="\n"
    }
    clipboard.writeSync(output)
    console.log(output)