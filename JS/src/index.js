const buttonOne = document.getElementById('click-button');
const paragraphOne = document.getElementById('p');
const inputOne = document.getElementById('message');
const spanOne = document.getElementById('counter');
const inputTwo = document.getElementById('todo-input');
const buttonTwo = document.getElementById('todo-button');
const ulOne = document.getElementById('todo-list');


buttonOne.addEventListener('click', (e) => {
    e.preventDefault();
    
    paragraphOne.style.display === 'block' ? 
    paragraphOne.style.display = 'none' :
    paragraphOne.style.display = 'block'
});

inputOne.addEventListener('input', (e) => {
    e.preventDefault();

    const inputLength = inputOne.value.length;
    spanOne.textContent = `Length: ${inputLength}`;

    inputLength >= 20 ? spanOne.style.color = 'red' : spanOne.style.color = 'black';
})

let inputTwoValue = '';

inputTwo.addEventListener('input', (e) => {
    e.preventDefault();

    inputTwoValue = e.target.value;
});


buttonTwo.addEventListener('click', (e) => {
e.preventDefault();

    if (inputTwoValue) {
        const li = document.createElement('li');
        
        li.textContent = inputTwoValue;

        ulOne.appendChild(li);

    };

    inputTwo.value = '';
    
    const liItems = ulOne.querySelectorAll('li');
    
    liItems.forEach((li, index) => {
        li.id = `item-${index+1}`;

        li.onclick = (e) => {
            const currentLi = e.target;
            currentLi.style.textDecoration = 'line-through';
        }
    });
});
