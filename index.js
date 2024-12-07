//my phase-1-array-map-method-lab
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ') // .split helps to split into words
      .map(word => {
        // .map helps us to Keep the rest of the word intact after the first letter meaning no lowercasing the others so that abbreviations won't be affected.)
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' '); // .Join is used to join the words back into a single string
  });
}

console.log(titleCased());
