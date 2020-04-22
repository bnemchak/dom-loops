const assignments = [
  {
    title: 't-rex',
    dueDate: 'April',
    topic: 100,
    notes: 'none',
  },
  {
    title: 'gator',
    dueDate: 'May',
    topic: 1900,
    notes: 'yes',
  }, {
    title: 'fish',
    dueDate: 'May',
    topic: 1000,
    notes: 'nope',
  }, {
    title: 'cats',
    dueDate: 'June',
    topic: 1600,
    notes: 'lots',
  },
];

const printToDom = (selector, textToPrint) => {
  console.log('in printToDom', selector, textToPrint);
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildAssignCards = (lessonPlan) => {
  let domString = '';

  for (let i = 0; i < lessonPlan.length; i++) {
    domString += `<div class="assignments">`;
    domString += `<h3> ${lessonPlan[i].title} </h3>`;
    domString += `The assignment ${lessonPlan[i].title} is due ${lessonPlan[i].dueDate} about ${lessonPlan[i].topic} </p>`
    domString += `</div>`
  }

  printToDom('#lesson-pen', domString);
}
const init = () => {
  buildAssignCards(assignments);
}

init ();
// exercise 2:
// create an assignments array, which has several assignment objects in it
// assignment should have: title, dueDate, topic, notes
// loop over assignments array, and create 'cards' for each assignment
// bonus points for using printToDom to print them to the dom
// hint: create a div for the assignment cards to go to
