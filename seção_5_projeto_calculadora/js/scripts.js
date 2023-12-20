class Calculator {
    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        var reg = new RegExp('^\\d+$');

        if(upperValue == "0") {
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent =+ input;
        }
    }
}


let calc = new Calculator;

console.log(calc);

let buttons = document.querySelectorAll('.btn')

for(let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}