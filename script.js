const board = document.getElementById("board");

for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.className = "square";
  board.appendChild(square);
}
