const winner = document.getElementById("winner");
const fields08 = document.querySelectorAll("td");
const resetBtn = document.getElementById("resetBtn");
// const field0 = document.getElementById("field0");
// const field1 = document.getElementById("field1");
// const field2 = document.getElementById("field2");
// const field3 = document.getElementById("field3");
// const field4 = document.getElementById("field4");
// const field5 = document.getElementById("field5");
// const field6 = document.getElementById("field6");
// const field7 = document.getElementById("field7");
// const field8 = document.getElementById("field8");

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Array of objects { key: value }
const fields = [
  { no: 0, ui: fields08[0] },
  { no: 1, ui: fields08[1] },
  { no: 2, ui: fields08[2] },
  { no: 3, ui: fields08[3] },
  { no: 4, ui: fields08[4] },
  { no: 5, ui: fields08[5] },
  { no: 6, ui: fields08[6] },
  { no: 7, ui: fields08[7] },
  { no: 8, ui: fields08[8] },
  // { no: 0, ui: field0 },
  // { no: 1, ui: field1 },
  // { no: 2, ui: field2 },
  // { no: 3, ui: field3 },
  // { no: 4, ui: field4 },
  // { no: 5, ui: field5 },
  // { no: 6, ui: field6 },
  // { no: 7, ui: field7 },
  // { no: 8, ui: field8 },
];

let currentXO = "X";

const checkWinner = () => {
  const xFields = fields
    .filter((field) => field.ui.innerText === "X")
    .map((field) => field.no);

  const oFields = fields
    .filter((field) => field.ui.innerText === "O")
    .map((field) => field.no);

  const didXWin = winningLines.some(
    (line) =>
      xFields.includes(line[0]) &&
      xFields.includes(line[1]) &&
      xFields.includes(line[2])
  );

  const didOWin = winningLines.some(
    (line) =>
      oFields.includes(line[0]) &&
      oFields.includes(line[1]) &&
      oFields.includes(line[2])
  );
  if (didXWin) {
    winner.innerText = "Winner: X";
  } else if (didOWin) {
    winner.innerText = "Winner: O";
  }
};

// EVENTS

fields.forEach((field) => {
  field.ui.addEventListener("click", (event) => {
    event.target.innerText = currentXO;

    currentXO = currentXO === "X" ? "O" : "X";
    checkWinner();
  });
});

// Reset button
resetBtn.addEventListener("click", (event) => {
  fields.forEach((field) => {
    field.ui.innerText = "";
  });
  currentXO = X;
  winner.innerText = "No winner just yet...";
});
