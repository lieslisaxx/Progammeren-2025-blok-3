console.log("it is connected");

/*kennis clips les 2aDLO*/
let score = 100;

const scoreVeld =document.querySelector("#score");
const kop = document.querySelector("h1");
const kleintitel= document.querySelector("p");
console.log (kop,kleintitel);

const button1 = document.querySelector("#versebutton1");
const button2 = document.querySelector("#versebutton2");
const button3 = document.querySelector("#versebutton3");
console.log (button1,button2,button3);

let sound1 = new Audio();
let sound2 = new Audio();
sound1.src = "wrongsound.mp3";
sound2.src = "rightsound.mp3";



function updateScore (){
  scoreVeld.textContent ="Score: " +score;
  console.log (updateScore);
}

/*opdracht myster number DLO en les 1b*/
if( (100 <= score)|| (60 <= score)){
  console.log("You are almost there!");
} else {
  console.log("Try again");
}


/*uitleg van cousin*/
// button geel and (score +20)
versebutton1.addEventListener("click", () => {
  score += 20;
  updateScore();
  versebutton1.classList.add("geel");
  console.log (versebutton1);
});

//*uitleg van cousin*//
//button geel and (score -20))
versebutton2.addEventListener("click", () => {
  score -= 20;
  updateScore();
  versebutton2.classList.add("geel")
  console.log (versebutton2);
});

//*uitleg van cousin*//
// button geel and (score -20)
versebutton3.addEventListener("click", () => {
  score -= 20;
  updateScore();
  versebutton3.classList.add("geel");
  console.log (versebutton3);
});

// Functies om de titel te veranderen//
function veranderNaarVers1() {
  kop.textContent = "Selected verse: Isaiah 41:10";
  console.log ("Verse is geselecteerd");
}

function veranderNaarVers2() {
  kop.textContent = "Selected verse: Psalm 56:3";
   console.log ("Verse is geselecteerd");
}

function veranderNaarVers3() {
  kop.textContent = "Selected verse: Matthew 19:26";
  console.log ("Verse is geselecteerd");
}

function veranderNaarBemoediging() {
  kleintitel.textContent = "Say the verse out loud!";
    console.log ("Bemoediging is veranderd");
}





// Connect with function verses//
button1.addEventListener("click", veranderNaarVers1);
button2.addEventListener("click", veranderNaarVers2);
button3.addEventListener("click", veranderNaarVers3);
button1.addEventListener ("click",veranderNaarBemoediging);
button2.addEventListener ("click",veranderNaarBemoediging);
button3.addEventListener ("click",veranderNaarBemoediging);

console.log (versebutton3);   
