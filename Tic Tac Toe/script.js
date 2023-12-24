let gameBox = document.querySelector("#game-box");
let boxes = document.querySelectorAll(".btn");
let winMsg = document.querySelector(".hide");
let resetBtn = document.querySelector("#reset");

let turn = "0";

let winPositions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === "X") {
      box.innerText = "X";
      turn = "0";
    } else {
      box.innerText = "0";
      turn = "X";
    }
    box.disabled = true;
    checkWinner();
  });
});


const  disabledBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
}

const showWinner = (winner)=>{
    winMsg.innerText = `congratulations, winner is ${winner}`;
    winMsg.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = ()=>{
    for(position of winPositions){
        let pos1Val = boxes[position[0]].innerText;
        let pos2Val = boxes[position[1]].innerText;
        let pos3Val = boxes[position[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click", ()=>{
    turn = "0";
    winMsg.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled = false;
    });
});

