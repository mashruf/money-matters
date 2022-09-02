function calculateBalance() {
    //getting value from income text input
    const incomeInput = document.getElementById('input-income');
    const incomeInputText = incomeInput.value;
    const income = parseFloat(incomeInputText);

    //getting value from food field text input
    const foodInput = document.getElementById('input-food');
    const foodInputText = foodInput.value;
    const food = parseFloat(foodInputText);

    //getting value from rent field text input
    const rentInput = document.getElementById('input-rent');
    const rentInputText = rentInput.value;
    const rent = parseFloat(rentInputText);

    //getting value from clothes field text input
    const clothesInput = document.getElementById('input-clothes');
    const clothesInputText = clothesInput.value;
    const clothes = parseFloat(clothesInputText);

    //getting value from total expences text area and balance text area
    const currentTotalExpenses = document.getElementById('total-expenses');
    const currentBalance = document.getElementById('balance');


    if (income >= 0) {
        if ((food >= 0 && food <= income) && (rent >= 0 && rent <= income) && (clothes >= 0 && clothes <= income)) {
            const totalExpenses = food + rent + clothes;
            const balance = income - totalExpenses;
            if (totalExpenses <= income) {
                currentTotalExpenses.innerText = totalExpenses;
                currentBalance.innerText = balance;
                return balance;
            }
            else {
                alert('Total expenses has exceeded your income!');
            }

        }
        else {
            alert("Food/Rent/Clothes can't be greater than income or be less than 0 and the field can't be empty!");
        }
    }
    else {
        alert('Income has to be a number and 0 or more than 0!');
    }
}

function calculateSavingAmountRemainingBalance() {
    //getting value from save text input
    const saveInput = document.getElementById('input-save');
    const saveInputText = saveInput.value;
    const save = parseFloat(saveInputText);

    //calculating saving amount
    const balance = calculateBalance();
    if (save >= 0 && save <= 100) {
        //calculting saving amount
        savingAmount = balance * (save / 100);
        //calculating remaining balance
        const remainingBalance = balance - savingAmount;
        //getting and value from total saving amount area and remaining text area
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else {
        alert('It is an invalid amount to save')
    }









}


//calculate button event handler
document.getElementById('calculate').addEventListener('click', function () {
    calculateBalance();
});

// save button event handler
document.getElementById('save').addEventListener('click', function () {
    calculateSavingAmountRemainingBalance();
});