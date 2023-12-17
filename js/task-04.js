const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');

let counterValue = value.innerText ?? 0; //let counterValue = 0;

decrement.addEventListener("click", onDecrement);
increment.addEventListener("click", onIncrement);

function onDecrement() {
    counterValue--;
    updateValue();
}

function onIncrement() {
    counterValue++;
    updateValue();
}

function updateValue() {
    value.innerText = counterValue;
}