import displaySection from "./displaySection";

export default function(){
    
    displaySection('home','menu','about');
    
    const greeting = document.createElement('h2');
    greeting.classList.add('greeting')
    greeting.textContent = 'Welcome to our restaurant!'
    content.appendChild(greeting);
}