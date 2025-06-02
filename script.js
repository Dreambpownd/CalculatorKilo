let lastOperand = 0;
let operation = null;

const inputWindowPrice = document.getElementById('inputWindowPrice');
const inputWindowGr = document.getElementById('inputWindowGr');
const Answer = document.getElementById('Answer');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    let a = 1000/inputWindowGr.value*inputWindowPrice.value;
    Answer.textContent = 'цена за килограмм:'+(a.toFixed(2));
    inputWindowPrice.value = '';
    inputWindowGr.value = '';
})
