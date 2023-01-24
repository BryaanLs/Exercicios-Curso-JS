const divParagrafos = document.querySelector('.paragrafos');
const allParagrafos = divParagrafos.querySelectorAll('p');


const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;

const body = document.body;
body.style.backgroundColor = 'black';

for (let p of allParagrafos) {
    p.style.backgroundColor = bgColorBody;
    p.style.color = '#FFF';
    p.style.padding = '3rem';
    p.style.borderRadius = '5rem'
    p.style.boxShadow = '0 0 10px black';

}
