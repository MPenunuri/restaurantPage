export default function(body){
    const footer = document.createElement('footer');
    footer.classList.add('flex','footer');
    footer.textContent = 'Front-end project by MPenunuri.';
    body.insertAdjacentElement('beforeend',footer);
}