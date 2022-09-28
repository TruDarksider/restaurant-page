import './style.css';
//import coffeeBean from './coffeeBean.png'; //Template for importing images for attaching
import landing from './landing.js';
import menu from './menu.js';
import contact from './contact.js';

function createHeader() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    /*This is how you attach an image, see import above as well
    const myCoffeeBean = new Image();
    myCoffeeBean.src = coffeeBean;
    content.appendChild(myCoffeeBean);
    */

    const hero = document.createElement('div');
    hero.classList.add('header');

    const btnLanding = document.createElement('button');
    btnLanding.textContent = 'About Us';
    btnLanding.onclick = landing;
    hero.appendChild(btnLanding);

    const btnMenu = document.createElement('button');
    btnMenu.textContent = 'Menu';
    btnMenu.onclick = menu;
    hero.appendChild(btnMenu);

    const btnContact = document.createElement('button');
    btnContact.textContent = 'Contact';
    btnContact.onclick = contact;
    hero.appendChild(btnContact);

    content.appendChild(hero);
    document.body.appendChild(content);

}

createHeader();