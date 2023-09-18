// Your code goes here
// Ex1
let myButton1 = document.getElementById('btn-ex2-1');
function myFunctionEx2() {
    alert("j'ai cliqué sur mon bouton !");
}
myButton1.addEventListener('click', myFunctionEx2);

// Ex2
let myDiv1 = document.getElementById('mouse1');
function myFunctionMouse(e) {
    e.target.style.color = "red";
}
myDiv1.addEventListener('mouseover', myFunctionMouse);

// Ex3
let myInputEx3 = document.getElementById('input-ex3');
myInputEx3.addEventListener('keydown', myFunctionTouch);
function myFunctionTouch(e) {
    const keyTouch = e.key;
    console.log("La touche est " + keyTouch);
}

//Ex4
let myDiv2 = document.getElementById('divEx4')
let newText = 'Texte dans ma boite dialogue';
myDiv2.innerHTML = newText;
// cibler le click dans la div
let recupClickDiv = myDiv2.addEventListener('click', myDiv2);
console.log(recupClickDiv);
function clickDiv(recupClickDiv){
    if (recupClickDiv != false){
        myDiv2.style.display = "none";
    }
}
// lancer la fonction lorsque la condition n'est pas respectée
/*function myFunctionCloseDiv2(e) {
}*/