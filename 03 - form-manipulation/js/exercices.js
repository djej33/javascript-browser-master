// Your code goes here
document.getElementById('monFormulaire').addEventListener('submit', function(e){
    e.preventDefault();
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let interet1 = document.getElementById('interet1').checked;
    let interet2 = document.getElementById('interet2').checked;
    let interet3 = document.getElementById('interet3').checked;
    console.log(nom);
    if (nom === "" || email === "" || (!interet1 && !interet2 && !interet3)) {
        alert("Veuillez remplir tous les champs obligatoires et sélectionner au moins un intérêt.");
        return false; // Empêche la soumission du formulaire
    }

    // Si toutes les validations sont réussies, le formulaire sera soumis
    return true;
})