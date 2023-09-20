import addNavBar from './addNavBar.js';
import addFooter from './addFooter.js';
import showHome from './showHome.js';
import './style.css';

const body = document.querySelector('body');
body.classList.add('body');

addNavBar(body);
showHome();
addFooter(body);


