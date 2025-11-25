const button = document.querySelector('#click-button');
const paragraph = document.querySelector('p');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    paragraph.style.display === 'block' ? 
    paragraph.style.display = 'none' :
    paragraph.style.display = 'block'
});