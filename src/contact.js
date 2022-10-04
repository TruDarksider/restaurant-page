export default function contact(){
    //console.log('Clicked for contact info!');
    
    const content = document.querySelector('#content');
    const header = document.querySelector('.header');
    while(header.nextSibling){header.nextSibling.remove();}

    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = 'Chance a Connection';

    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.textContent = 'We can be reach by guessing the correct digits in the +[#|##](###)#### format. Long distance charges will likely apply, but depend on the number when you reach it.';
    contact.appendChild(phone);

    content.appendChild(contact);
}