

function eval_string(str) {
    try {
        return String(eval(str));
    } catch {

    }
    return str;
}
var fieldText = "";
function handleClick(event) {
    var symbol = event.target.innerText;
    switch (symbol) {
        case "Back":
            fieldText = fieldText.slice(0, -1);
            break;
        case "C":
            fieldText = "";
            break;
        case "Ans":
            fieldText = eval_string(fieldText);
            break;
        default:
            fieldText += symbol;
            break;
    }
    const field = document.getElementById("field");
    field.value = fieldText;
    console.log(fieldText);
}
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})