
let button1 = document.getElementById("button1.1")
let button2 = document.getElementById("button1.2")
let button3 = document.getElementById("button1.3")
let button4 = document.getElementById("button2.1")
let button5 = document.getElementById("button2.2")
let button6 = document.getElementById("button2.3")
let button7 = document.getElementById("button3.1")
let button8 = document.getElementById("button3.2")
let button9 = document.getElementById("button3.3")
let main = document.getElementById("main")

let row1 = [button1 , button2 , button3]
let row2 = [button4 , button5 , button6]
let row3 = [button7 , button8 , button9]

let colom1 = [button1 , button4 , button7]
let colom2 = [button2 , button5 , button8]
let colom3 = [button3 , button6 , button9]



let x = "X";
let o = "O"
let answer = [];




function clickedButtonFun(event) {
    const clickedButton = event.currentTarget; 
    console.log(`Button clicked: ${clickedButton.textContent}`);

    if (clickedButton.innerText == x || clickedButton.innerText == o ){
        // clickedButton.disabled = true;
        return;
    }


    else if (answer.includes(x)){
            clickedButton.innerText = o
            answer.shift();
            answer.push(o);
        }
    else {
        clickedButton.innerText = x
        answer.shift();
        answer.push(x);
    }

   
}

const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', clickedButtonFun);
    button.addEventListener('click', win);

});


//----------------------------------Win Function------------------------------

function winFun(){
   
    const winButton = document.createElement("button");
    winButton.innerText = "New Game";
    main.appendChild(winButton);           
    winButton.addEventListener("click", newGame);
    winButton.className = "p-3 btn btn-outline-light fs-1 mt-5";

    function newGame(){
        window.location.reload();
    }
               
    // const winImg= document.createElement("img");
    // winImg.src = "/rageh/Hang-Man/images/Fireworks.png";
    // winImg.alt = "win pic";
    // main.appendChild(winImg);
}



function win(){

    //------------------------------row X------------------------------------------
    if (button1.innerText == x && button2.innerText == x && button3.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win"
        winFun()
    }

    else if (button4.innerText == x && button5.innerText == x && button6.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win" 
        winFun()
 
    }
    else if (button7.innerText == x && button8.innerText == x && button9.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win"   
        winFun() 
    }

    //--------------------------------colom X-------------------------------------------
    else if (button1.innerText == x && button4.innerText == x && button7.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win"  
        winFun() 
    }

    else if (button2.innerText == x && button5.innerText == x && button8.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win"  
        winFun() 
    }
    else if (button3.innerText == x && button6.innerText == x && button9.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win" 
        winFun()  
    }
    //---------------------------------- X X -----------------------------------------------

    else if (button1.innerText == x && button5.innerText == x && button9.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win"  
        winFun()  
    }
    else if (button3.innerText == x && button5.innerText == x && button7.innerText == x ){
        document.getElementById("h1").innerHTML = "X Win" 
        winFun() 
    }

    //------------------------------row O------------------------------------------
    else if (button1.innerText == o && button2.innerText == o && button3.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win"
        winFun()  
    }

    else if (button4.innerText == o && button5.innerText == o && button6.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win" 
        winFun() 
    }
    else if (button7.innerText == o && button8.innerText == o && button9.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win" 
        winFun()  
    }

    //--------------------------------colom O-------------------------------------------
    else if (button1.innerText == o && button4.innerText == o && button7.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win" 
        winFun() 
    }

    else if (button2.innerText == o && button5.innerText == o && button8.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win" 
        winFun() 
    }
    else if (button3.innerText == o && button6.innerText == o && button9.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win" 
        winFun()  
    }
    //----------------------------------X O -----------------------------------------------

    else if (button1.innerText == o && button5.innerText == o && button9.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win"
        winFun()  
    }
    else if (button3.innerText == o && button5.innerText == o && button7.innerText == o ){
        document.getElementById("h1").innerHTML = "O Win"
        winFun()  
    }
}