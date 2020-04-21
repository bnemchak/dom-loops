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


const init = () => {
  colorLoop ();
}

init();
