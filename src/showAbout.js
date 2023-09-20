import displaySection from "./displaySection";
import aboutText from "./aboutText";

export default function(){
    
    displaySection('about','menu','home');
    
    const aboutHeader = document.createElement('h2');
    aboutHeader.classList.add('aboutHeader')
    aboutHeader.textContent = 'About us'
    content.appendChild(aboutHeader);

    const text = document.createElement('p');
    text.classList.add('aboutText');
    text.innerHTML = aboutText();
    content.appendChild(text);
}