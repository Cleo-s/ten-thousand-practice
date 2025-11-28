
const incBtn = document.getElementById('inc-btn') as HTMLButtonElement;
const decBtn = document.getElementById('dec-btn') as HTMLButtonElement;
const totalSpan = document.getElementById('amount-otp') as HTMLSpanElement;
const userNameInput = document.getElementById('user-name-input') as HTMLInputElement;
const greetUserBtn = document.getElementById('greet-btn') as HTMLButtonElement;
const greetSpan = document.getElementById('greet-span') as HTMLSpanElement;

let iniValue: number = 0;

if (!incBtn || !decBtn || !totalSpan) 
  console.error('Error');
else 
  totalSpan.textContent = `Count is: ${iniValue}`;

incBtn.addEventListener('click', () => {
  iniValue += 1;
  totalSpan.textContent = `Count is: ${iniValue}`;
});

decBtn.addEventListener('click', () => {
  iniValue -= 1;
  totalSpan.textContent = `Count is: ${iniValue}`;
});

if (!userNameInput || !greetSpan || !greetUserBtn)  
  console.log('Error');

let userName: string = '';

userNameInput.addEventListener('input', (e: Event) => {
  
  const target = e.target as HTMLInputElement | null;
  if (!target) return;

  userName = target.value;
});

greetUserBtn.addEventListener('click', () => {
  if (!userName)
    greetSpan.textContent = 'Please enter your Username';
  else {
    const trimmedUserName: string = userName.trim();
    greetSpan.textContent = `Hi there, ${trimmedUserName}`;
  } 
})