import displaySection from "./displaySection.js";
import { menu } from "./menu.js"
import showItems from "./showItems.js";
import arrowIcon from "../assets/arrow.svg"

export default function(){
    displaySection('menu','home','about');
    for(const categorie in menu){
        let categorieContainer = document.createElement('div');
        categorieContainer.classList.add('flex','column','menuCategorie');

        let dropDownBtn = document.createElement('button');
        dropDownBtn.classList.add('flex','dropDownBtn');

        let symbol = document.createElement('img');
        symbol.classList.add('categorieArrow');
        symbol.src = arrowIcon;
        dropDownBtn.appendChild(symbol);

        let name = document.createElement('p');
        name.classList.add('categorieName')
        name.textContent = categorie;
        dropDownBtn.appendChild(name);

        dropDownBtn.addEventListener('click',() => {
            showItems(dropDownBtn,categorieContainer,menu[categorie])
        })

        categorieContainer.appendChild(dropDownBtn);

        content.appendChild(categorieContainer);
    };
};