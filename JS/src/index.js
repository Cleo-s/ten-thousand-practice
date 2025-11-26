const button = document.querySelector('#click-button');
const paragraph = document.querySelector('p');
const input = document.querySelector('#message');
const span = document.querySelector('#counter')


button.addEventListener('click', (e) => {
    e.preventDefault();
    
    paragraph.style.display === 'block' ? 
    paragraph.style.display = 'none' :
    paragraph.style.display = 'block'
});

input.addEventListener('input', (e) => {
    e.preventDefault();

    const inputLength = input.value.length;
    span.textContent = `Length: ${inputLength}`;

    inputLength >= 20 ? span.style.color = 'red' : span.style.color = 'black';
})

