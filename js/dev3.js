//Message de bienvenue
alert("Bienvenue sur le site du pendu");

//array

let undscArr =[];
let playerChoiceLow =[];
let wordChoiceArr =[];

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

let undscArr = Array.from(undsc);


// Fonctions :
do {
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

let found = playerChoiceLow[i];
let foundFrom = wordChoiceArr[i];

//function underscore replace
function undscReplace(){
    
    if (playerChoiceLow[found] === wordChoiceArr[foundFrom]){

        undscArr[0] = playerChoiceLow[0];
        console.log("salut");
    }
    else {
        console.log("kk");
    
    }
};

console.log(undscArr);


// function that compare player choice and word choiced by the computer
function compare(){
    // function to replace underscore with correct letter
    undscReplace();
    
    for (let tour =0; tour <1; tour++){
        
            if (wordChoiceArr.includes(playerChoiceLow)){
                
             alert("Bien joué" + "\n\n" + undscArr);
         }
            else{
                vie--;
                alert("NON, il vous reste "  + vie + "point de vie.");
            }
       
    }
    
    
};

compare();  

}
while (vie > 0);
// || undscArr === wordchoicearr.


if (vie === 0){
    alert("Perdu");
}
else{
    alert("gagné !");
}


// if playerchoice[i] === wordchoicearr[i] 
// || if playerhcoice === wordchoicearr[1] etc...
// guess[i]
