const qtCr = document.querySelector('#qt-cr') as HTMLInputElement;
const lettersCr = document.querySelector('#letters-cr') as HTMLInputElement;
const specCr = document.querySelector('#spec-cr') as HTMLInputElement;
const numberCr = document.querySelector('#numbers-cr') as HTMLInputElement;
const btn = document.querySelector('.gen-btn') as HTMLButtonElement;
const passView = document.querySelector('.pass-view') as HTMLElement;
const resetBtn = document.querySelector('.reset-btn') as HTMLButtonElement;
const lightDark = document.querySelector('.slider') as HTMLElement;
const lightDarkImg = document.querySelector('.btn-img') as HTMLImageElement;
const body = document.querySelector('body') as HTMLBodyElement;
const h1 = document.querySelector('h1') as HTMLElement;
const h2 = document.querySelector('h2') as HTMLElement;
const h3 = document.querySelector('h3') as HTMLElement;
const txtInputs = document.querySelectorAll('.txt-inputs') as NodeListOf<HTMLElement>;
const form = document.querySelector('form') as HTMLFormElement;
const titleContainer = document.querySelector('.container-title') as HTMLElement;


lightDark.addEventListener('click', () => {
    lightDarkImg.classList.toggle('rotate');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        h1.style.color = '#C71585';
        h2.style.color = '#333';
        h3.style.color = '#333';
        lightDarkImg.src = 'assets/interface/change-icon-light.png';
        lightDark.style.backgroundColor = '#C71585';

        txtInputs.forEach(input => {
            input.style.border = '1px solid #C71585'; 
            input.style.backgroundColor = 'transparent';
            input.style.setProperty('color', '#333'); 
        });

        btn.style.backgroundColor = 'transparent';
        resetBtn.style.backgroundColor = 'transparent';
        btn.style.color = '#333';
        resetBtn.style.color = '#333';
        btn.style.border = '1px solid #C71585';
        resetBtn.style.border = '1px solid #C71585';
        form.style.border = '1px solid #C71585';
        titleContainer.style.border = '1px solid #C71585';
        passView.style.border = '1px solid #C71585';
        passView.style.color = 'black';
    } else {
        h1.style.color = 'var(--title-border-color-dark)';
        h2.style.color = '#eee';
        h3.style.color = '#eee';
        lightDarkImg.src = 'assets/interface/change-icon-dark.png';
        lightDark.style.backgroundColor = 'var(--title-border-color-dark)';

        txtInputs.forEach(input => {
            input.style.border = '1px solid var(--title-border-color-dark)';
            input.style.backgroundColor = '#333';
            input.style.color = '#eee';
        });

        btn.style.backgroundColor = '#333';
        resetBtn.style.backgroundColor = '#333';
        btn.style.color = '#bbb';
        resetBtn.style.color = '#bbb';
        btn.style.border = '1px solid var(--title-border-color-dark)';
        resetBtn.style.border = '1px solid var(--title-border-color-dark)';
        form.style.border = '1px solid var(--title-border-color-dark)';
        titleContainer.style.border = '1px solid var(--title-border-color-dark)';
        passView.style.border = '1px solid var(--title-border-color-dark)';
        passView.style.color = '#eee';
    }
});


const alphabetAndNumbers = [...'abcdefghijklmnopqrstuvwxyz', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', ...'123456789'];

function randomize(size: number): string {
    let result = '';
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * alphabetAndNumbers.length);
        result += alphabetAndNumbers[randomIndex];
    }
    return result;
}

function randomizePass(letters: string, special: string, numbers: string): string {
    const randomSequence = [...letters, ...special, ...numbers];
    for (let i = randomSequence.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [randomSequence[i], randomSequence[randomIndex]] = [randomSequence[randomIndex], randomSequence[i]];
    }
    return randomSequence.join('');
}

function generatePass(qtCr: HTMLInputElement, lettersCr: string, specCr: string, numberCr: string): void {
    let limit = parseInt(qtCr.value);
    if (limit < 1) {
        qtCr.setCustomValidity('Please enter a number greater than or equal to 1.');
    } else if (limit > 18) {
        qtCr.setCustomValidity('Please enter a number less than or equal to 18.');
    } else {
        qtCr.setCustomValidity('');
    }
    if(limit > 18) {
        alert('Please enter a number less than or equal to 18.')
    } else {
        let password = randomizePass(lettersCr, specCr, numberCr);

        while (password.length < limit) {
            password += randomize(1);
        }
    
        password = password.slice(0, limit);
    
        passView.textContent = password;
    }
    }

btn.addEventListener('click', (event) => {
    event.preventDefault();
    generatePass(qtCr, lettersCr.value, specCr.value, numberCr.value);
});
resetBtn.addEventListener('click', (event) => {
    event.preventDefault();
    qtCr.value = '';
    lettersCr.value = '';
    specCr.value = '';
    numberCr.value = '';
    passView.textContent = '';
})