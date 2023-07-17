function calculateResult() {
    const dropdown1 = parseFloat(document.getElementById('dropdown1').value);
    const dropdown2 = parseFloat(document.getElementById('dropdown2').value);
    const dropdown3 = parseFloat(document.getElementById('dropdown3').value);
    const dropdown4 = parseFloat(document.getElementById('dropdown4').value);
    const numberInput = parseFloat(document.getElementById('number').value);

    let result;
    let severity;

    if (isNaN(numberInput)) {
        result = dropdown1 * dropdown2 * dropdown3 * dropdown4 * 100;
    } else {
        result = dropdown1 * dropdown2 * dropdown3 * dropdown4 * 100 + numberInput * 0.35;
    }

    result = Math.floor(result);

    if(result < 0) {
        severity = 'Invalid calculation';
    } else if (result >= 0 && result <= 19) {
        severity = 'Minor';
    } else if (result >= 20 && result <= 39) {
        severity = 'Medium';
    } else if (result >= 40 && result <= 59) {
        severity = 'Major';
    } else if (result >= 60 && result <= 79) {
        severity = 'Critical';
    } else if (result >= 80) {
        severity = 'Blocker';
    }

    document.getElementById('result').innerHTML = 'Result: ' + severity;
}