import addEventListener from "./addEventListener";

export default function(body){

    const navBar = document.createElement('nav');
    navBar.classList.add('flex','nav');
    body.insertAdjacentElement('afterbegin',navBar);

    const header = document.createElement('header');
    header.classList.add('flex','header');
    header.textContent = 'Culinary Oasis'
    body.insertAdjacentElement('afterbegin',header);

    const buttonsNames = ['Home','Menu','About'];

    buttonsNames.forEach((name) =>{
        let btn = document.createElement('button');
        btn.classList.add('navBtn');
        btn.textContent = name;
        addEventListener(btn,name);
        navBar.appendChild(btn);
    });
};