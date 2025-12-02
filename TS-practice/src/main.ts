
const incBtn = document.getElementById('inc-btn') as HTMLButtonElement;
const decBtn = document.getElementById('dec-btn') as HTMLButtonElement;
const totalSpan = document.getElementById('amount-otp') as HTMLSpanElement;
const userNameInput = document.getElementById('user-name-input') as HTMLInputElement;
const greetUserBtn = document.getElementById('greet-btn') as HTMLButtonElement;
const greetSpan = document.getElementById('greet-span') as HTMLSpanElement;
const colorDiv = document.getElementById('block') as HTMLDivElement;
const btnBlock = document.getElementById('btn-collection') as HTMLDivElement;

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

/*------------------------------------------------------------------TASK 1------------------------------------------------------------*/

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

/*------------------------------------------------------------------TASK 2------------------------------------------------------------*/

type BtnId = 'btn-1' | 'btn-2' | 'btn-3';
type BtnData = {
  id: BtnId;
  color: string;
} 
type DataSet = {
  [key in BtnId]: BtnData;
}

const btnDataSet: DataSet = {
  "btn-1": {id: 'btn-1', color: 'red'},
  "btn-2": {id: 'btn-2', color: 'yellow'},
  "btn-3": {id: 'btn-3', color: 'blue'}, 
}


function changeColor(colorDiv: HTMLDivElement, btnBlock: HTMLDivElement, btnDataSet: DataSet) {
  if (btnBlock) {
    const buttonsA = btnBlock.querySelectorAll<HTMLButtonElement>('button');
    buttonsA.forEach((btn) => {
      if (!(btn.id in btnDataSet)) return;
      const config = btnDataSet[btn.id as keyof DataSet];

      btn.style.backgroundColor = config.color

      if (!btn) return;
      
      btn.textContent = `${config.color}`;

      btn.addEventListener('click', () => {
        colorDiv.style.backgroundColor = config.color;
      })
    })
  }
}

changeColor(colorDiv, btnBlock, btnDataSet);