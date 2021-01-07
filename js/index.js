const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = ()=>{
        const intro = document.querySelector('.intro');
        const playBtn = document.querySelector('.intro button');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }


    //play match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const computerHand = document.querySelector('.computer-hand');
        const playerHand = document.querySelector('.player-hand');
        const hands = document.querySelectorAll('.hands img');

        //stop the animation after each round, so that we  it in the next round
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            });
        })

        //computer options
        const computerOptions = ['rock','paper', 'scissors'];

        options.forEach(option=>{
           option.addEventListener('click', function(){
            const computerNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(()=>{
            //we call compareHands here
            compareHands(this.textContent,computerChoice);

            //update the picture
            computerHand.src = `css/pics/${computerChoice}.png`;
            playerHand.src = `css/pics/${this.textContent}.png`;      //text content of the button. if we had used an arrow function for the event listener, we couldn't access the this keyword here.
            },2000);

            //animation
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
        });
     });

    };


    //compare hands
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winner.textContent = 'It\'s a tie!';
            return;
          
        }else if(playerChoice === 'rock'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Computer Won!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'You Won!';
                pScore++;
                updateScore();
                return; 
            }
        }else if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'You Won!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'computer Won!';
                cScore++;
                updateScore();
                return; 
            }
        }else if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'You Won!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'computer Won!';
                cScore++;
                updateScore();
                return; 
            }
        }
    };

    //updating the scores
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    //call the inner functions
    startGame();
    playMatch();
   
}

//call the main function
game();