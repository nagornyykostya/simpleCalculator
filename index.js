

var operationButtons = document.getElementsByClassName('operationButtons');
var inPut1 = document.getElementById('number1');
var inPut2 = document.getElementById('number2');


function operation(operationType) {
    var number1Value = Number(inPut1.value);
    var number2Value = Number(inPut2.value);

    if (operationType === '+') {
        var result = number1Value + number2Value;
    } else if (operationType === '-') {
        var result = number1Value - number2Value;
    } else if (operationType === '*') {
        var result = number1Value * number2Value;
    } else if (operationType === '/') {
        var result = number1Value / number2Value;
    } else {
        window.alert('Comand not defind')
    }
window.alert(result);
}

function operationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operationSign = clickedElement.innerHTML;
    operation(operationSign);
}

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', operationButtonClick);
}
