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
    historyExplain.textContent = 'Our seed was planted before the universe was. Sown by a being who is unknowable, we have become like them. Children in the truest sense, we cannot maintain any single form.';
    history.appendChild(historyExplain);

    content.appendChild(history);
}