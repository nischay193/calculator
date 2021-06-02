var fieldText = "";

function eval_string(str) {
    try {
        return String(eval(str));
    } catch {

    }
    return str;
}
function handleClick(event) {
    var symbol = event.target.innerText;
    switch (symbol) {
        case "⌫︁":
            fieldText = fieldText.slice(0, -1);
            break;
        case "C":
            fieldText = "";
            break;
        case "=":
            fieldText = eval_string(fieldText);
            break;
        default:
            fieldText += symbol;
            break;
    }
    const field = document.getElementById("field");
    field.value = fieldText;
}

function keyboardListener(event) {
    var symbol = event.key;
    switch (symbol) {
        case "Backspace":
            fieldText = fieldText.slice(0, -1);
            break;
        case "Enter":
            fieldText = eval_string(fieldText);
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "/":
        case "*":
        case "-":
        case "+":
        case ".":
            fieldText += symbol;
            break;
    }
    const field = document.getElementById("field");
    field.value = fieldText;
}

const buttons = document.querySelectorAll("button");

// add button listeners
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

// Keyboard Listeners
document.addEventListener("keydown", keyboardListener);



