const colors = ['red', 'orange', 'blue', 'yellow', 'purple'];

// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// console.log(colors[3])

const colorLoop = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i])
    domString += `<h2>${colors[i]}</h2>`;
  }
  console.log(domString);
}


//const init = () => {
  //colorLoop ();
//}

//init();

// Exercise 1:
// create an array of instructor objects, each with firstName and lastName properties (keys/values)
// create a function that will loop over the instructors array
// console.log() full instructor names i.e. "Luke Lancaster", "Matt Gill", etc etc etc etc
// call the function in init()



const instructors = [
  { firstName: 'Luke', lastName: 'Lancaster'},
  { firstName: 'Matt', lastName: 'Gill'},
  { firstName: 'Michael', lastName: 'Clark'},
];

const instructorsLoop = () => {
  let domString = '';
   for (let i = 0; i < instructors.length; i++) {
     domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`;
   }
   console.log(domString)
}

const init = () => {
  instructorsLoop();
}

init();
