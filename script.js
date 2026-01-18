const board = document.getElementById("board");

// Create empty top-left cell
board.appendChild(document.createElement("div"));

// Top header (0–9)
for (let i = 0; i < 10; i++) {
  const cell = document.createElement("div");
  cell.className = "cell header";
  cell.textContent = i;
  board.appendChild(cell);
}

// Rows
for (let row = 0; row < 10; row++) {
  // Left header (0–9)
  const header = document.createElement("div");
  header.className = "cell header";
  header.textContent = row;
  board.appendChild(header);

  // Squares
  for (let col = 0; col < 10; col++) {
    const square = document.createElement("div");
    square.className = "cell";
    board.appendChild(square);
  }
}