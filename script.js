'use strict';
const formulaire = document.getElementById('form-rdv');
const list = document.getElementById('list-rdv');
formulaire.addEventListener('submit' , (evenement)=>{ 
    evenement.preventDefault();
    const nom = document.getElementById('nom').value.trim();
    const date = document.getElementById('date').value.trim();
    const motif = document.getElementById('motif').value.trim();
    const element = document.createElement('li');
    element.textContent = date +'-' + nom + ':' + motif;
    const bouton = document.createElement('button');
    bouton.textContent = 'supprimer';
    element.appendChild(bouton);
    bouton.addEventListener('click', () => { element.remove();});  
    list.appendChild(element);
    formulaire.reset();
});

