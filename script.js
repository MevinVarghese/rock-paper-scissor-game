function play() {
  let player = Math.floor(Math.random() * 3);
  let computer = Math.floor(Math.random() * 3);

  if (player === 0) {
    document.getElementById("paper").src = "./assets/stone.png";
  } else if (player === 1) {
    document.getElementById("paper").src = "./assets/paper.png";
  } else if (player === 2) {
    document.getElementById("paper").src = "./assets/scissor.png";
  }

  if (computer === 0) {
    document.getElementById("scissor").src = "./assets/stone.png";
  } else if (computer === 1) {
    document.getElementById("scissor").src = "./assets/paper.png";
  } else if (computer === 2) {
    document.getElementById("scissor").src = "./assets/scissor.png";
  }

  if (player === computer) {
    document.getElementById("result").innerHTML = "Draw";
  } else if (player == 0) {
    if (computer == 1) {
      document.getElementById("result").innerHTML = "Computer Wins";
    } else {
      document.getElementById("result").innerHTML = "player Wins";
    }
  } else if (player == 1) {
    if (computer == 2) {
      document.getElementById("result").innerHTML = "computer Wins";
    } else {
      document.getElementById("result").innerHTML = "player Wins";
    }
  } else if (player == 2) {
    if (computer == 0) {
      document.getElementById("result").innerHTML = "Computer Wins";
    } else {
      document.getElementById("result").innerHTML = "player Wins";
    }
  }
}
