// whole doc is hardcoded with randomized values

const owners = [
  { name: "Tucker Froelich", squares: 2 },
  { name: "Matthew Lee", squares: 2 },
  { name: "Robert Hudson", squares: 4 },
  { name: "Jacob Hochstein", squares: 2 },
  { name: "Alex Atherton", squares: 1 },
  { name: "Jackson Peurach", squares: 2 },
  { name: "Connor McDermott", squares: 4 },
  { name: "Neha Rodricks", squares: 2 },
  { name: "Seabass Ochoa", squares: 4 },
  { name: "Kayla Derman", squares: 1 },
  { name: "Alex Cohen", squares: 2 },
  { name: "Evan Katz", squares: 2 },
  { name: "Dom Fenoglio", squares: 2 },
  { name: "David Leshem", squares: 4 },
  { name: "Eli Gertler", squares: 2 },
  { name: "Kai Summersgill", squares: 2 },
  { name: "Micah Hurewitz", squares: 2 },
  { name: "Zain Jafar", squares: 3 },
  { name: "Aditya Sardesai", squares: 4 },
  { name: "Jacob Miller", squares: 2 },
  { name: "Bryan Fisher", squares: 2 },
  { name: "James Gao", squares: 2 },
  { name: "Jacqui Levitan", squares: 3 },
  { name: "Jonathan Levitan", squares: 2 },
  { name: "Chase Barclay", squares: 2 },
  { name: "Ithika Senthilnathan", squares: 1 },
  { name: "Miles King", squares: 4 },
  { name: "Sara Azimi", squares: 2 },
  { name: "Nathan Simon", squares: 2 },
  { name: "Frankie Willard", squares: 2 },
  { name: "Paul Levitan", squares: 4 },
  { name: "Aidan Fetterly", squares: 2 },
  { name: "Jacob Green", squares: 4 },
  { name: "Neil Ashe", squares: 3 },
  { name: "David Mellgard", squares: 4 },
  { name: "Max Pollack", squares: 2 },
  { name: "Caleb Dudley", squares: 2 },
  { name: "Josh Levitan", squares: 2 },
  { name: "Aidan Ashe", squares: 2 },
  { name: "Ryan Lou", squares: 2 },
  { name: "Matthew McCauley", squares: 1 },
  { name: "Ellie Smith", squares: 1 }
];

const squares = [];

owners.forEach(owner => {
  for (let i = 0; i < owner.squares; i++) {
    squares.push(owner.name);
  }
});

// const shuffledSquares = shuffle(squares);

// hardcoded with randomized values
const shuffledSquares = [
  "Aditya Sardesai","Neil Ashe","Aidan Fetterly","Bryan Fisher","Jacob Green","Robert Hudson","David Leshem","James Gao","Connor McDermott","Jonathan Levitan",
  "David Mellgard","Caleb Dudley","Sara Azimi","Paul Levitan","Miles King","Dom Fenoglio","Eli Gertler","Seabass Ochoa","Paul Levitan","Seabass Ochoa",
  "David Leshem","Sara Azimi","Chase Barclay","Miles King","Neil Ashe","David Leshem","Aditya Sardesai","David Mellgard","Alex Cohen","Caleb Dudley",
  "Ithika Senthilnathan","Jacqui Levitan","Paul Levitan","Kai Summersgill","David Leshem","James Gao","Miles King","Seabass Ochoa","Nathan Simon","Connor McDermott",
  "David Mellgard","Ryan Lou","Zain Jafar","Connor McDermott","Aidan Ashe","Nathan Simon","Paul Levitan","Zain Jafar","Josh Levitan","Kayla Derman",
  "Miles King","Evan Katz","Kai Summersgill","Aidan Fetterly","Jacob Miller","Ryan Lou","Evan Katz","Jacqui Levitan","Seabass Ochoa","Micah Hurewitz",
  "Robert Hudson","David Mellgard","Ellie Smith","Micah Hurewitz","Jacob Green","Tucker Froelich","Matthew Lee","Jonathan Levitan","Robert Hudson","Jacob Miller",
  "Frankie Willard","Dom Fenoglio","Alex Cohen","Zain Jafar","Bryan Fisher","Matthew McCauley","Jackson Peurach","Josh Levitan","Tucker Froelich","Jacob Hochstein",
  "Alex Atherton","Connor McDermott","Robert Hudson","Jacqui Levitan","Matthew Lee","Aidan Ashe","Aditya Sardesai","Chase Barclay","Max Pollack","Jackson Peurach",
  "Jacob Green","Neil Ashe","Frankie Willard","Max Pollack","Eli Gertler","Jacob Green","Neha Rodricks","Aditya Sardesai","Jacob Hochstein","Neha Rodricks"
];



// const squaresTimestamp = new Date().toLocaleString();
const squaresTimestamp = "1/24/2026, 5:17:23 PM"

owners.sort((a, b) => a.name.localeCompare(b.name));
const ownersDiv = document.getElementById("owners");

const ownersTable = document.createElement("table");
const ownersHeader = document.createElement("tr");
ownersHeader.innerHTML = "<th>Name</th><th>Squares</th>";
ownersTable.appendChild(ownersHeader);

let totalSquares = 0;

owners.forEach(owner => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${owner.name}</td><td>${owner.squares}</td>`;
  ownersTable.appendChild(row);
  totalSquares += owner.squares;
});

const totalRow = document.createElement("tr");
totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalSquares}</strong></td>`;
ownersTable.appendChild(totalRow);

ownersDiv.appendChild(ownersTable);

function generateNumbers() {
  return Array.from({ length: 10 }, (_, i) => i);
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// const xAxis = shuffle(generateNumbers());
// const yAxis = shuffle(generateNumbers());
const xAxis = [4, 6, 2, 3, 1, 7, 8, 0, 9, 5];
const yAxis = [1, 5, 3, 4, 8, 0, 6, 9, 2, 7];
// const timestamp = new Date().toLocaleString();
const timestamp = "1/24/2026, 5:17:23 PM"

const gridDiv = document.getElementById("grid");

const timestampP = document.createElement("p");
timestampP.innerHTML = `<strong>Axes randomized at:</strong> ${timestamp}`;
gridDiv.appendChild(timestampP);

const squaresInfo = document.createElement("p");
squaresInfo.innerHTML = `<strong>Squares randomized at:</strong> ${squaresTimestamp}`;
gridDiv.appendChild(squaresInfo);

const gridTable = document.createElement("table");

const headerRow = document.createElement("tr");
headerRow.appendChild(document.createElement("th"));

xAxis.forEach(num => {
  const th = document.createElement("th");
  th.textContent = num;
  headerRow.appendChild(th);
});

gridTable.appendChild(headerRow);

yAxis.forEach(yNum => {
  const row = document.createElement("tr");

  const yHeader = document.createElement("th");
  yHeader.textContent = yNum;
  row.appendChild(yHeader);

  for (let i = 0; i < 10; i++) {
    const cell = document.createElement("td");
    cell.textContent = shuffledSquares.shift();
    row.appendChild(cell);
  }

  gridTable.appendChild(row);
});

gridDiv.appendChild(gridTable);
