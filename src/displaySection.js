import removeClass from "./removeClass";
import removeChildElements from "./removeChildElements";

export default function(newClass,classToDelete1,classToDelete2){
    const content = document.getElementById('content');
    removeChildElements(content);
    removeClass(content,classToDelete1);
    removeClass(content,classToDelete2);
    content.classList.add('flex','column','content',newClass);
}