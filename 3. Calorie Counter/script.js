const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  entryDropdown = "#" + value ;

}

addEntryButton.addEventListener('click', () => {
  const value = cleanInputString(entryDropdown.value);
  if (isInvalidInput(value)) {
    isError = true;
  } else {
    isError = false;
  }
  if (isError) {
    output.innerText = 'Invalid input';
  } else {
    output.innerText = 'Valid input';
  }
});

clearButton.addEventListener('click', () => {
  entryDropdown.value = '';
  output.innerText = '';
});