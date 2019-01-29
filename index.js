let audio = document.getElementById('myAudio');
let winAudio = document.getElementById('win-audio');
let loseAudio = document.getElementById('lose-audio');
const huPlayer = 'O';
const aiPlayer = 'X';
const huScore = document.getElementById('score1');
let scoreCount1 = 0;
const aiScore = document.getElementById('score2');
let scoreCount2 = 0;
let origBoard;
function playAudio(){
    audio.play();
}
function playWin(){
    winAudio.play();
}
function playLose(){
    loseAudio.play();
}
const button1 = document.getElementById('b1');
button1.onclick = game1;
function game1(){
    document.getElementById('main1').style.display = "flex";
    document.getElementById('main2').style.display = "none";
    const boxes = document.getElementsByClassName('cell1');
    const startButton = document.getElementById('startbutton');
    startButton.onclick = startGame;
    startGame();
    function startGame(){
        origBoard = [0,1,2,3,4,5,6,7,8];
        // to draw in certain box
        for (let i = 0; i < boxes.length; i++) {
            let cell = boxes[i];
            cell.innerHTML = "";
            cell.addEventListener('click',draw,false);
            cell.addEventListener('click',playAudio,false);
            document.getElementById('endgame1').style.display = "none";
            cell.style.backgroundColor = "white";
        }
    }
    // draw X/O into a box
    function draw(box) {
        // only can draw in box if the box is empty
        if (box.target.innerHTML == ""){
            turn(box.target.id,huPlayer);
            if (checkWin(origBoard,huPlayer)==false){
                if (checkTie()==false) {
                    turn(randomMove(),aiPlayer);
                }
            }
        }
    }
    function turn(boxId,player){
        origBoard[boxId]=player;
        document.getElementById(boxId).innerHTML = player;
        if (checkWin(origBoard,huPlayer)==true){
            for (let i = 0; i < boxes.length; i++) {
                let cell = boxes[i];
                cell.removeEventListener('click',draw,false);
                document.getElementById('endgame1').style.display = "flex";
                document.getElementById('text1').innerText = 'You win!'; 
                cell.style.backgroundColor = "blue";
                cell.onclick = setTimeout(playWin,400);
            }
            scoreCount1++;
            huScore.innerHTML = scoreCount1;
        }
        if (checkWin(origBoard,aiPlayer)==true){
            for (let i = 0; i < boxes.length; i++) {
                let cell = boxes[i];
                cell.removeEventListener('click',draw,false);
                document.getElementById('endgame1').style.display = "flex";
                document.getElementById('text1').innerText = 'You lose!';
                cell.style.backgroundColor = "red";
                cell.onclick = setTimeout(playLose,400);
            }
            scoreCount2++;
            aiScore.innerHTML = scoreCount2;
        }
    }
    // check empty box for aiplayer to fill in
    function emptyBox(){
        let emptySpot = [];
        for (let i = 0; i<boxes.length; i++) {
            let cell = boxes[i];
            if (cell.innerHTML == ""){
                emptySpot.push(i);
            }
        } 
        return emptySpot;
    }

    // Create a computer player that places random moves.
    function randomMove(){
        let random = emptyBox()[Math.floor(Math.random()*((emptyBox()).length))]
        return random;
    }
    // how to check whether u win/lose
    function checkWin(board,player){
        if ((board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)) {
            return true;
        } 
        else {
            return false;
        }
    }
    function checkTie(){
        if (emptyBox().length == 0){
            for (let i = 0; i < boxes.length; i++) {
                let cell = boxes[i];
                cell.removeEventListener('click',draw,false);
                document.getElementById('endgame1').style.display = "flex";
                document.getElementById('text1').innerText = 'Tie Game!';
                cell.style.backgroundColor = "yellow";
            }
            return true;
        }
        return false;
    }
}
const button2 = document.getElementById('b2');
button2.onclick = game2;
function game2(){ 
    document.getElementById('main1').style.display = "none";
    document.getElementById('main2').style.display = "flex"; 
    const boxes = document.getElementsByClassName('cell2');
    const startButton = document.getElementById('startbutton');
    startButton.onclick = startGame;
    startGame();
    function startGame(){
        origBoard = [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
        // to draw in certain box
        for (let i = 0; i < boxes.length; i++) {
            let cell = boxes[i];
            cell.innerHTML = "";
            cell.addEventListener('click',draw,false);
            cell.addEventListener('click',playAudio,false);
            document.getElementById('endgame2').style.display = "none";
            cell.style.backgroundColor = "white";
        }
    }
    // draw X/O into a box
    function draw(box) {
        // only can draw in box if the box is empty
        if (box.target.innerHTML == ""){
            turn(box.target.id,huPlayer);
            if (checkWin(origBoard,huPlayer)==false){
                if (checkTie()==false) {
                    turn(randomMove(),aiPlayer);
                }
            }
        }
    }
    function turn(boxId,player){
        origBoard[boxId]=player;
        document.getElementById(boxId).innerHTML = player;
        if (checkWin(origBoard,huPlayer)==true){
            for (let i = 0; i < boxes.length; i++) {
                let cell = boxes[i];
                cell.removeEventListener('click',draw,false);
                document.getElementById('endgame2').style.display = "flex";
                document.getElementById('text2').innerText = 'You win!'; 
                cell.style.backgroundColor = "blue";
                cell.onclick = setTimeout(playWin,400);
            }
            scoreCount1++;
            huScore.innerHTML = scoreCount1;
        }
        if (checkWin(origBoard,aiPlayer)==true){
            for (let i = 0; i < boxes.length; i++) {
                let cell = boxes[i];
                cell.removeEventListener('click',draw,false);
                document.getElementById('endgame2').style.display = "flex";
                document.getElementById('text2').innerText = 'You lose!';
                cell.style.backgroundColor = "red";
                cell.onclick = setTimeout(playLose,400);
            }
            scoreCount2++;
            aiScore.innerHTML = scoreCount2;
        }
    }
    // check empty box for aiplayer to fill in
    function emptyBox(){
        let emptySpot = [];
        for (let i = 0; i<boxes.length; i++) {
            let cell = boxes[i];
            if (cell.innerHTML == ""){
                emptySpot.push(cell.id);
            }
        } 
        return emptySpot;
    }

    // Create a computer player that places random moves.
    function randomMove(){
        let random = emptyBox()[Math.floor(Math.random()*((emptyBox()).length))]
        return random;
    }
    // how to check whether u win/lose
    function checkWin(board,player){
        if ((board[9] == player && board[10] == player && board[11] == player && board[12] == player && board[13] == player) ||
            (board[14] == player && board[15] == player && board[16] == player && board[17] == player && board[18] == player) ||
            (board[19] == player && board[20] == player && board[21] == player && board[22] == player && board[23] == player) ||
            (board[24] == player && board[25] == player && board[26] == player && board[27] == player && board[28] == player) ||
            (board[29] == player && board[30] == player && board[31] == player && board[32] == player && board[33] == player) ||
            (board[9] == player && board[14] == player && board[19] == player && board[24] == player && board[29] == player) ||
            (board[10] == player && board[15] == player && board[20] == player && board[25] == player && board[30] == player) ||
            (board[11] == player && board[16] == player && board[21] == player && board[26] == player && board[31] == player) ||
            (board[12] == player && board[17] == player && board[22] == player && board[27] == player && board[32] == player) ||
            (board[13] == player && board[18] == player && board[23] == player && board[28] == player && board[33] == player) ||
            (board[9] == player && board[15] == player && board[21] == player && board[27] == player && board[33] == player) ||
            (board[13] == player && board[17] == player && board[21] == player && board[25] == player && board[29] == player)) {
            return true;
        } 
        else {
            return false;
        }
    }
    function checkTie(){
        if (emptyBox().length == 0){
            for (let i = 0; i < boxes.length; i++) {
                let cell = boxes[i];
                cell.removeEventListener('click',draw,false);
                document.getElementById('endgame2').style.display = "flex";
                document.getElementById('text2').innerText = 'Tie Game!';
                cell.style.backgroundColor = "yellow";
            }
            return true;
        }
        return false;
    }
}  
