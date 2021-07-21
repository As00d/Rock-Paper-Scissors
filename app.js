// a big function that will contain the whole game so we dont have the global variables
// scoping everything inside this function
const game =()=> {
//   initial value of score created using let because we are going to update it further
    let pscore=0;
    let cscore=0;

//  creating the function just same way like above


// function  to startGame
const startGame =()=>{
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');
    playBtn.addEventListener('click' ,()=>
    {
    introScreen.classList.add('fadeout');
    match.classList.add('fadein');
    });
};

//  to play the match

const playMatch =()=>{
    //  select the button from the options
    const options = document.querySelectorAll('.options button');
    const playerhand = document.querySelector('.player-hand');
    const computerhand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');
    // computer options will be randomally generated

hands.forEach(hand=>{
    hand.addEventListener('animationend',function(){
        this.style.animation = '';
    })
});




    // array 
    const computerOptions = ["rock", "paper" , "scissors"];
    

    //  we need this thing to happen only when the button is pressed by the player 
  options.forEach(option=>{
      option.addEventListener("click", function()
      {
          // computer choice 
       const computerNumber = Math.floor(Math.random()*3);
       const computerChoice = computerOptions[computerNumber];
        // //  here using this we will get whatever value we clicked upon
        
      setTimeout(() => {
          
       // here we will call compare hands
        compareHands(this.textContent,computerChoice);
        updateScore();
        // update images 
        playerhand.src= `./image/${this.textContent}.png`;
        computerhand.src = `./image/${computerChoice}.png`;
      }, 2000);
        // for the animation part

        playerhand.style.animation = "shakeplayer 2s ease";
        computerhand.style.animation = "shakecomputer 2s ease";

      });

  });
};


const updateScore=()=>
{
    const playerScore = document.querySelector('.player-score p');
    const compScore = document.querySelector('.computer-score p');

    playerScore.textContent = pscore;
    compScore.textContent = cscore;
}

// a function to check who won the game 

const compareHands =(playerChoice , computerChoice)=>
{
    const winner = document.querySelector(".winner");
    // checking for tie
    if(playerChoice === computerChoice)
    {
    winner.textContent ='It is a tie';
    return;
    }
    // check for rock
    if(playerChoice === 'rock')
    {
        if(computerChoice === 'paper')
        {
        winner.textContent ='Computer Wins';
        cscore++;
        return;
        }
        else
        {
        winner.textContent ='Player Wins';
        pscore++;
        return;
        }
    }

    // check for paper
     if(playerChoice=== 'paper')
    {
        if(computerChoice === 'rock')
        {
        winner.textContent ='Player Wins';
        pscore++;
        return;
        }
        else
        {
        winner.textContent ='Computer Wins';
        cscore++;
        return;
        }
    }

    // check for scissors
     if(playerChoice=== 'scissors')
    {
        if(computerChoice === 'paper')
        {
        winner.textContent ='Player Wins';
        pscore++;
        return;
        }
        else
        {
        winner.textContent ='Computer Wins';
        cscore++;
        return;
        }
    }
};

// call all the inner functions 
startGame();
playMatch();

};

game();