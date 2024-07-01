let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara  = document.querySelector("#user-score");
const compscorepara  = document.querySelector("#comp-score");

const gencompchoice=()=>{
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);   //it will generate 0 ,1,2
    return option[randidx];
};

const drawgame = ()=>{
    console.log("game was draw");
    msg.innerText = "Game was draw ! Play again";
    msg.style.backgroundColor = "#081b31"
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText=`You win ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText=`You lose !  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice)=>{
   //console.log("user choice = ",userchoice);
    //Generate computer choice
    const compchoice = gencompchoice();
  // console.log("comp choice = ",compchoice);

    if (userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            if (compchoice=="paper"){
                userwin = false;
            }else{userwin=true;}
            //userwin = compchoice==="paper"?false:true;
        }else if(userchoice=="paper"){
            if(compchoice=="rock"){
                userwin=true;
            }else{userwin=false}
            //userwin=compchoice==="scissors"?false: true;
        }else{
            if(compchoice=="paper"){
                userwin=true;
            }else{
                userwin=false;
            }
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

