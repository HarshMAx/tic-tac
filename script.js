let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgCon = document.querySelector(".msg-containor");
let msg = document.querySelector("#msg");

let turnO = true;//player x, player O
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],  
];


const resetGame = () =>{
    // turnO = true;
    for(let box of boxes){
        box.innerText = "";
        location.reload();
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false; 
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let winner = checkWinner();
        if(count === 9 && !winner){
            msg.innerHTML = `Match is draw 😁`
        } 
    });
});


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

let showWinner = (win) => {
    msg.innerHTML = `Congratulations 🥳,Winner is ${win}`
    // location.reload()
    setTimeout(()=>{
        location.reload();
    },5000)
}

const checkWinner = () => {
    for(let pattern of winPattern){
        
        let pst1Val = boxes[pattern[0]].innerText;
        let pst2Val = boxes[pattern[1]].innerText;
        let pst3Val = boxes[pattern[2]].innerText; 
        
        if(pst1Val != "" && pst2Val != "" && pst3Val != "") {
            if(pst1Val === pst2Val && pst2Val === pst3Val){
                console.log("winner",pst1Val);
                showWinner(pst1Val);
            }
        }
       
    }
}


