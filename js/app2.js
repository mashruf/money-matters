//function to get value from all the existing fields
function getInput(inputField) {

    const inputText = document.getElementById(inputField).value;
    const input = parseFloat(inputText);
    return input;
}

//function to calculate total expense
function totalExpenses() {
    const food = getInput('input-food');
    const rent = getInput('input-rent');
    const clothes = getInput('input-clothes');

    const totalExpenses = food + rent + clothes;
    return totalExpenses;
}

//function to calculate balance
function balance() {
    const income = getInput('input-income');
    const current_balance = income - totalExpenses();
    return current_balance;
}

//calculate saving amount
function savingAmount() {
    const save = (balance() * (getInput('saving-amount') / 100)).toFixed(2);
    return save;

}

//calculate remaining balance
function remainingBalance() {
    const remainingAmount = balance() - savingAmount();
    return remainingAmount;
}

//calculate button handler
document.getElementById('calculate').addEventListener('click', function () {
    if (getInput('input-income') >= 0) {
        if (getInput('input-food') < 0 || getInput('input-rent') < 0 || getInput('input-clothes') < 0) {
            alert("Food,rent and clothes field can't be negative");
        }
        else if (totalExpenses() <= getInput('input-income')) {
            document.getElementById('total-expenses').innerText = totalExpenses();
            document.getElementById('balance').innerText = balance();
        }

        else {
            alert("Total expenses has exceeded your income!")
        }
    }
    else {
        alert("Income can't be empty or less than 0");
    }
});