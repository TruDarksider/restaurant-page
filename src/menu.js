import coffeeCup from './coffeeCup.jpg'

export default function menu(){
    //console.log('Clicked on Menu!');
    const myCoffeeCup = new Image();
    myCoffeeCup.src = coffeeCup;
    const myCoffeeCup2 = new Image();
    myCoffeeCup2.src = coffeeCup;
    const myCoffeeCup3 = new Image();
    myCoffeeCup3.src = coffeeCup;

    const content = document.querySelector('#content');
    const header = document.querySelector('.header');
    while(header.nextSibling){header.nextSibling.remove();}

    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menuName = document.createElement('h1');
    menuName.textContent = 'Menu of the Moment';
    menu.appendChild(menuName);

    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    menuItem.textContent = 'Mystery Mug #1: Includes a drink containing notes of a sweet fruit, a nut, and either chocolate or flower.';
    menuItem.appendChild(myCoffeeCup);
    menu.appendChild(menuItem);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menuItem');
    menuItem2.textContent = 'Mystery Mug #2: Includes a drink containing notes of an acidic fruit, a nut, and some spices.';
    menuItem2.appendChild(myCoffeeCup2);
    menu.appendChild(menuItem2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menuItem');
    menuItem3.textContent = 'Mystery Mug #3: Includes a drink containing notes of a fruit and marshmallow or grain, with either a tea or milk-like body.';
    menuItem3.appendChild(myCoffeeCup3);
    menu.appendChild(menuItem3);

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menuItem');
    menuItem4.textContent = 'Just Water: will be some level of carbonated with sources ranging from the freshest of springs or the tastiest tap.';
    menu.appendChild(menuItem4);

    content.appendChild(menu);
}