import showHome from "./showHome.js";
import showMenu from "./showMenu.js"
import showAbout from "./showAbout.js"

export default function(btn,name){

    let op;

    switch (name){
        case 'Home':
            op = showHome;
            break;
        case 'Menu':
            op = showMenu;
            break;
        case 'About':
            op = showAbout;
            break;
    };

    btn.addEventListener('click',op);
}