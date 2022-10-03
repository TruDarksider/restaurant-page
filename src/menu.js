export default function menu(){
    //console.log('Clicked on Menu!');

    const content = document.querySelector('#content');
    const header = document.querySelector('.header');
    while(header.nextSibling){header.nextSibling.remove();}

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.textContent = 'Menu of the Moment';

    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    menuItem.textContent = 'Mystery Mug #1: Includes a drink containing notes of a fruit, a nut, and either chocolate or flower.';
    menu.appendChild(menuItem);

    content.appendChild(menu);
}