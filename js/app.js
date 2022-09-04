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

    const totalExpenses = (food + rent + clothes).toFixed(2);
    return totalExpenses;
}

//function to calculate balance
function balance() {
    const income = getInput('input-income');
    const current_balance = (income - totalExpenses()).toFixed(2);
    return current_balance;
}

//calculate saving amount
function savingAmount() {
    const save = (balance() * (getInput('input-save') / 100)).toFixed(2);
    return save;

}

//calculate remaining balance
function remainingBalance() {
    const remainingAmount = (balance() - savingAmount()).toFixed(2);
    return remainingAmount;
}

//calculate button handler
document.getElementById('calculate').addEventListener('click', function () {
    if (getInput('input-income') > 0) {
        if (getInput('input-food') > - 0 && getInput('input-rent') >= 0 && getInput('input-clothes') >= 0) {
            if (totalExpenses() <= getInput('input-income')) {
                document.getElementById('total-expenses').innerText = totalExpenses();
                document.getElementById('balance').innerText = balance();
            }
            else {
                alert("Total expenses has exceeded your income!");
            }
        }

        else {
            alert("Negative amount or empty field or Invalid Input has been entered!");
        }
    }
    else {
        alert("Income can't be empty and should be a number greater than 0");
    }
});

//save button handler
document.getElementById('save').addEventListener('click', function () {
    if (balance() > 0) {
        if (getInput('input-save') <= 100 && getInput('input-save') >= 0) {
            document.getElementById('saving-amount').innerText = savingAmount();
            document.getElementById('remaining-balance').innerText = remainingBalance();
        }
        else {
            alert("You can't save more than more than 100% or less than 0% ");
        }
    }
    else {
        alert("You have no amount to save!");
    }


});