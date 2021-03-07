//Message de bienvenue
alert("Bienvenue sur le site du pendu");


// Variables :

//variable words
let words = [
    "pizza",
    "concombre",
    "salami",
    "tardigrade"
];

// variables random words
let wordsRandom = Math.floor(Math.random() * words.length);

let wordChoice = (wordsRandom, words[wordsRandom]);

let wordChoiceArr = Array.from(wordChoice);

console.log(wordChoice);

// Variable Health Point

let vie = 7;

//variable player choice

let playerChoice =[];

// variable underscore

let undsc = "";
for(i=0; i < wordChoiceArr.length; i++){
    undsc += "_"
}

let undscArr = Array.from(undsc);


// Fonctions :


// function to check if the player as enter only 1 letter and not a number,then lowercase his choice.
function isViable(){
    do {
        let playerChoice= prompt("Entrez une lettre" + "\n" + "\n" + undscArr);

        if (playerChoice.length === 1 && isNaN(playerChoice)) {
            
            return playerChoice.toLowerCase();  
        }
        else {
            
            alert("Entrez une seule lettre"); 
            
        }
      
    }
    while (playerChoice.length !==1);

}



//function to replace underscore with the correct letter
function undscReplace(){

    if (wordChoiceArr.includes(playerChoiceLow)) {
        for (var i = 0; i < wordChoiceArr.length; i ++) {
            if (playerChoiceLow === wordChoiceArr[i]){
                undscArr[i] = wordChoiceArr[i]; 
                
               
            }
            else {
                
            }
        
        };
    }
}
        
        
console.log(undscArr);


// function that compare player choice and word choiced by the computer
function compare(){
    // function to replace underscore with the correct letter
    undscReplace();
    
    for (let tour =0; tour <1; tour++){
        
            if (wordChoiceArr.includes(playerChoiceLow)){
                
             alert("Bien joué !" + "\n\n" + undscArr);
         }
            else{
                vie--;
                alert("Raté, il vous reste "  + vie + " point de vie.");
            } 
    }
      
};

// while loop to play the game, call the function etc ...

while (vie > 0){
    var playerChoiceLow = isViable();
    compare();
        if (vie === 0){
             alert("Dommage, vous n'avez pas trouvé le mot " + wordChoice);
        }   
        if (Object.is(undscArr.toString(), wordChoiceArr.toString())){
            alert("Bravo, vous avez trouvé le mot " + wordChoice);
            break; 
        }
      
    
};
