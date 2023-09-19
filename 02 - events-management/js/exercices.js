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
let boiteDialogue = document.getElementById('divEx4')
function fermerBoiteDeDialogue(){
    boiteDialogue.style.display ="none";
}


document.addEventListener("click",function(e){
    if(!boiteDialogue.contains(e.target)){
        fermerBoiteDeDialogue();
    }

});

//Ex5

let form = document.getElementById("formulaire");
let buttonSubmit = document.querySelector(('input[type="submit"]'));
let messageErreur = document.getElementById("messageError");

buttonSubmit.addEventListener("click", function(e){
e.preventDefault();

let nom = document.getElementById("name").value;
let email = document.getElementById("email").value;
if(!nom){
    messageErreur.innerText = ("Merci de saisir un nom");
}
else if(!email){
    messageErreur.innerText += (" \n Veuillez renseigner votre mail ");
}
else{
    form.submit();
    console.log(form);
}
}

);
 
//Ex6

document.addEventListener("scroll",function(e){
    document.querySelector("body").style.backgroundColor ="red";


})

