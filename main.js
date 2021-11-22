// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texte suivant : Les attributs class et id
let exo1 = document.querySelector("h1")
exo1.innerText = "Les attibuts class et id"
// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
let exo2 = document.querySelector("h2")
exo2.innerText = "Exercice 2 partie A"
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
let exo3 = document.querySelectorAll("h2")[1]
exo3.innerText = "Exercice 2 partie B"
// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>
let exo4 = document.querySelectorAll("p")[0] 
exo4.innerText = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"

// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide
exo4 = document.querySelectorAll("p")[1]
exo4.innerText = " La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

//#######################################################################################
// ## Partie 2.1 Ajout d'attribut et de leurs valeurs

// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
exo1.setAttribute("id", "bigTitle")

// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
let recupDiv = document.querySelector("div")
recupDiv.setAttribute("class", "container")

// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
let exo8 = document.querySelectorAll('h2')
let arrExo8 = Array.from(exo8)

arrExo8.forEach(el => {
    el.setAttribute("class", "tile")
}
    )


// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"
let allP = document.querySelectorAll("p")
let arrP = Array.from(allP)

arrP.forEach(el => {
    el.setAttribute("class", "text" )
})

// ## Partie 2.2 Ajout d'attribut et de leurs valeurs


// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
let section = document.querySelectorAll("section")
section[0].setAttribute("class", "margin-bottom border-black padding")

// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
section[1].setAttribute("class", "margin-top border-black padding")

// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px
let myDiv = section[1].querySelector("div")
console.log(myDiv);
myDiv.style.backgroundColor = "blue"
myDiv.style.border = "1px solid black"
myDiv.style.height = "20px"
myDiv.style.width = "20px"

//######################################################################################################################################"

//1 
let exo1 = document.querySelector('h1')
exo1.innerText = "Les attributs class et id"

let exo2 = document.querySelector("h2")
exo2.innerText = "Exercice 2 partie A"

let exo3 = document.querySelectorAll('h2')[1]
exo3.innerText = "Exercice 2 partie B"

let exo4 = document.querySelector('p')
exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> "

let exo5 = document.querySelectorAll('p')[1]
exo5.innerHTML = "La manipulation de l'attribut Style peut-Ãªtre une <i>solution</i> rapide"

exo1.setAttribute('id', "bigTitle")
let recupDiv = document.querySelector('div')
recupDiv.setAttribute('class', "container")

let exo8 = document.querySelectorAll('h2')
let arrExo8 = Array.from(exo8)

arrExo8.forEach(el => {
    el.setAttribute('class', "title")
});

let allP = document.querySelectorAll('p')
let arrP = Array.from(allP)

arrP.forEach(el => {
    el.setAttribute("class", "text")
});

let section = document.querySelectorAll('section')
section[0].setAttribute('class', 'margin-bottom border-black padding')

section[1].setAttribute('class', "margin-top border-black padding")

let myDiv = section[1].querySelector('div')
console.log(myDiv);
myDiv.style.height = "20px"
myDiv.style.width = "20px"
myDiv.style.backgroundColor = "blue"
myDiv.style.border = "1px solid black"

