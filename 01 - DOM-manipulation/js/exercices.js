// Your code goes here
//Ex1: 
//let myParagraph = document.querySelector('#bonjour');
//myparagraph.innerText = "Bonjour, DOM!";
//function addtextinside(target, content){
    //target.innerText = content;
//}
//

//Ex 2: 

document.getElementById("bonjour").innerHTML = "Bonjour DOM!";
document.getElementById("post").innerHTML = '<img src="Images/post1.jpg">';

let parent = document.getElementById("parent");
let enfant = document.getElementById("click");
parent.appendChild(enfant);

let paragraphe = document.getElementsByClassName("chaineDeCaracteres");
document.getElementsByClassName("chaineDeCaracteres").className = "newClass";
console.log(paragraphe.className);


let array = ["Alice", "Bob", "Charlie"];
let liste = document.getElementById("liste");
for(let i = 0; i <array.length; i++){
    li = document.createElement("li");
    li.innerText = array[i];
    liste.appendChild(li);
};
