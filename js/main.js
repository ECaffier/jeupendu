//Message de bienvenue
alert("Bienvenue sur le site du pendu");

// Variables :

let words = [
    "pizza",
    "concombre",
    "salami",
    "tardigrade"
];
// variables mot random
let wordsRandom = Math.floor(Math.random() * words.length);
let wordChoice = (wordsRandom, words[wordsRandom]);
let wordChoiceArr = Array.from(wordChoice);
console.log(wordChoice);

// Variable HP

let vie = 7;

//variable choix joueur

let playerChoice ="";

// variable underscore

let undsc = "";
for(i=0; i < wordChoiceArr.length; i++){
    undsc += "_ "
}

console.log(undsc);

// Fonctions :

function isViable(){
    do {
        let playerChoice= prompt("Rentrez une lettre" + "\n" + "\n" + undsc);

        if (playerChoice.length === 1 && isNaN(playerChoice)) {
            
            return playerChoice.toLowerCase();  
        }
        else {
            
            alert("Rentrez une seule lettre"); 
            
        }
      
    }
    while (playerChoice.length !==1);
    
}
let playerChoiceLow = isViable();



function compare(){
    
    for (oneLetter of wordChoiceArr){
        
            if (wordChoiceArr.includes(playerChoiceLow)){
             alert("Bien joué" + "\n\n" + undsc);
         }
            else{
                vie--;
                alert("NON, il vous reste "  + vie + "point de vie.");
            }
       
    }
    
    
};

compare();  





