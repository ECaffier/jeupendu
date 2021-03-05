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

// variable hide wordChoiceArr


// Variable HP

let vie = 7;

//variable choix joueur

let playerChoice ="";


// Fonctions :

function isViable(){
    do {
        let playerChoice= prompt("Rentrez une lettre" + "\n" + "\n" + wordChoiceArr);

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





console.log(wordChoiceArr);

function compare(){
    for (oneLetter of wordChoiceArr){
        
        if (wordChoiceArr.includes(playerChoiceLow)){
            alert("Bien joué" + "\n\n" + wordChoiceArr);
        }
        else{
            vie--;
            alert("NON, il vous reste "  + vie);
        }
    }

};

compare();  


// function underScore (){


// }


