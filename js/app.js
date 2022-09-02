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

    //calculating total expenses and balance
    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;

    if (income > 0) {
        if ((food >= 0 && food <= income) && (rent >= 0 && rent <= income) && (clothes >= 0 && clothes <= income) && (totalExpenses <= income)) {
            currentTotalExpenses.innerText = totalExpenses;
            currentBalance.innerText = balance;
            return balance;

        }
        else {
            alert('Food/Rent/Clothes should not be empty and the value should not be a negative number or greater than the income. Expenses should not exceed income!');
        }
    }
    else {
        alert('Income should be more than 0')
    }
}

function calculateSavingAmountRemainingBalance() {
    //getting value from save text input
    const saveInput = document.getElementById('input-save');
    const saveInputText = saveInput.value;
    const save = parseFloat(saveInputText);

    //calculating saving amount
    const balance = calculateBalance();
    if (balance >= 0) {
        if (save >= 0 && save <= 100) {
            //calculting saving amount
            savingAmount = (balance * (save / 100)).toFixed(2);
            //calculating remaining balance
            const remainingBalance = (balance - savingAmount).toFixed(2);
            //getting and value from total saving amount area and remaining text area
            document.getElementById('saving-amount').innerText = savingAmount;
            document.getElementById('remaining-balance').innerText = remainingBalance;
        }
        else {
            alert('You can not save more than 100% !')
        }
    }
    else {
        alert('Please enter valid input in all fields!');
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