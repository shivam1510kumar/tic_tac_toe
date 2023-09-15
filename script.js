console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.wav");
let turnAudio = new Audio("ting.mp3");
let gameoverAudio = new Audio("gameover.wav");

let turn = "X";
let gameover = false;

//function to change turn
const changeturn =()=>{
    return turn==='X'? '0':'X';
}
// function for when player wins
var x = window.matchMedia("(max-width:616px)");
const checkWin =(x)=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    
 if(x.matches){
    let wins =[
        [0, 1, 2,0,7,0],
        [3, 4, 5,0,23,0],
        [6, 7, 8,0,38,0],
        [0, 3, 6,-15,23,90],
        [1, 4, 7,0,23,90],
        [2, 5, 8,15,23,90],
        [0, 4, 8,1,24,45],
        [2, 4, 6,1,21,-45],
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==''){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            gameoverAudio.play();
            document.querySelector(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="45vw";    
        }
    })
 }
 else{
    let wins =[
        [0, 1, 2,0,5,0],
        [3, 4, 5,0,15,0],
        [6, 7, 8,0,25,0],
        [0, 3, 6,-10,15,90],
        [1, 4, 7,0,15,90],
        [2, 5, 8,10,15,90],
        [0, 4, 8,0,15,45],
        [2, 4, 6,0,15,-45],
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==''){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            gameoverAudio.play();
            document.querySelector(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="30vw";    
        }
    })
 } 
}

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeturn();
            turnAudio.play();
            checkWin(x);
            if(!gameover){
                document.querySelector(".info").innerText = "Turn For "+ turn;
            }
        }
    })
})

//onclick on reset button
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText = "";
    });
    gameover = false;
    turn = "X";
    document.querySelector(".info").innerText = "Turn For "+ turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";
    document.querySelector(".line").style.width="0vw";

})
