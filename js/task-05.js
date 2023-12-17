const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", onInput);

function onInput(e) {
    if (!e.target.value) {
        setValue(span, "Anonymous");
    }
    else {
        setValue(span, e.target.value);
    }
}

function setValue(el, value) {
    el.innerText = value;
}