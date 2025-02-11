let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector('#newgame')
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector(".Msg");

let turnO=true;
let winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner =(winner)=>{
    Msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const tie=()=>{
    Msg.innerText="Match Drawn";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner=()=>{
    let flag=true;
    let filledBoxes=0;
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val);
            flag=false;
            showWinner(pos1val);
        }
    };
    boxes.forEach(box => {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    });
    if (filledBoxes === 9 && flag) {
        tie();
    }
}
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide")

}
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);