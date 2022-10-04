export default function landing(){
    //console.log('Clicked on Landing Button!');
    
    const content = document.querySelector('#content');
    const header = document.querySelector('.header');
    while(header.nextSibling){header.nextSibling.remove();}

    const history = document.createElement('div');
    history.classList.add('info');
    history.textContent = 'Our Roots are Unknowable';

    const historyExplain = document.createElement('p');
    historyExplain.classList.add('infoText');
    historyExplain.textContent = 'Our seed was planted before the universe was. Sown by a being who is unknowable, we have become like them. Children in the truest sense, we can maintain any multitude of forms.';
    history.appendChild(historyExplain);

    content.appendChild(history);

    const howWork = document.createElement('h1');
    howWork.textContent = 'How Does this Work?';
    const howWorkExplain = document.createElement('p');
    howWorkExplain.classList.add('info');
    howWorkExplain.textContent = 'Some portions of the enumerable pallets have been scoped down to the most specific they can be. They are all flavors and no flavors. Once observed, the flavor profile is set and your drink may be enjoyed with that consistent flavor you crave (but that we find unsavory).';
    howWork.appendChild(howWorkExplain);

    content.appendChild(howWork);
}