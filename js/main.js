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

let playerChoice =[];

// variable underscore

let undsc = "";
for(i=0; i < wordChoiceArr.length; i++){
    undsc += "_"
}

let undscArr = Array.from(undsc);


// Fonctions :

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
    // function to replace underscore with correct letter
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


while (vie > 0){
    var playerChoiceLow = isViable();
    compare();
        if (vie === 0){
             alert("Perdu");
        }   
        if (Object.is(undscArr.toString(), wordChoiceArr.toString())){
            alert("Gagné !");
            break; 
        }
      
    
};
// || undscArr === wordChoiceArr.

// if (vie === 0){
//     alert("Perdu");
// }
// else{
//     alert("Gagné !");
// }


// if playerchoice[i] === wordchoicearr[i] 
// || if playerhcoice === wordchoicearr[1] etc...
// guess[i]


// faire une variable qui prend le nouveau undscArr
//ou créer une variable avec chaque lettre ajouté par le user

// ou changer le tableau et string et le .replace();