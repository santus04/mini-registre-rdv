'use strict';
const formulaire = document.getElementById('form-rdv');
const liste = document.getElementById('liste-rdv');
let rendezVous = [];
function afficher() {
  liste.replaceChildren();
  rendezVous.forEach((rdv, index) => {
    const element = document.createElement('li');
    element.textContent = rdv.date + ' - ' + rdv.nom + ' : ' + rdv.motif;
    const bouton = document.createElement('button');
    bouton.textContent = 'Supprimer';
    element.appendChild(bouton);
    bouton.addEventListener('click', () => {
      rendezVous.splice(index, 1);
      sauvegarder();
      afficher();
    });
    liste.appendChild(element);
     });
}
function sauvegarder() {
  localStorage.setItem('rdv', JSON.stringify(rendezVous));
}
function charger() {
    const texte = localStorage.getItem('rdv');
    if (texte===null) { return; }
    try {
      const donnees = JSON.parse(texte);
     if (Array.isArray(donnees)) { rendezVous = donnees; }    

    } catch ( erreur) {
      rendezVous = [];
    } 
}
formulaire.addEventListener('submit', (evenement) => {
  evenement.preventDefault();
  const nom = document.getElementById('nom').value.trim();
  const date = document.getElementById('date').value;
  const motif = document.getElementById('motif').value.trim();
  if (nom.length < 2 || motif.length < 3 || !date) { return; }
  rendezVous.push({ date: date, nom: nom, motif: motif });
  sauvegarder();
  afficher();
  formulaire.reset();
});
charger();
afficher();