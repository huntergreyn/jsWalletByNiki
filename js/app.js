// Prompt the user for their weekly budget, ensuring it's a valid number
let budget = prompt('Please tell us your weekly budget');

// Validate the input to be a positive integer
while (!/^[0-9]+$/.test(budget)) {
    alert("You did not enter a number.");
    budget = prompt("Enter a number: ");
}
alert("You entered a number.");

// Get a reference to the HTML element displaying the remaining budget
let left = document.querySelector('#left');

// If the budget is not empty, update the total and remaining budget
if (budget !== '') {
    document.querySelector('#total').textContent = budget;
    left.textContent = budget;
} else {
    // Keep prompting for the budget until a valid value is provided
    while (budget == '') {
        budget = prompt('Enter your budget');
        if (budget !== '') {
            document.querySelector('#total').textContent = budget;
            left.textContent = budget;
        }
    }
}

// Event listener for the button click
const btn = document.querySelector('.btn-primary');
btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Get the expense and amount values from the input fields
    let expense = document.querySelector('#expense').value;
    let amount = document.querySelector('#amount').value;
    let numberAmount = Number(amount);
    let leftNumber = Number(left.textContent);

    // Validate that both expense and amount fields are filled
    if (expense == '' || amount == '') {
        alert('تمامی فیلدها را پر کنید'); // Alert in Persian: "Please fill in all fields"
    } else {
        // Create a new list item for the expense and amount
        const ul = document.querySelector('.list-group');
        const li = document.createElement('li');
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        span.textContent = expense;
        span2.textContent = amount;
        li.appendChild(span);
        li.appendChild(span2);
        ul.appendChild(li);

        // Update the remaining budget
        left.textContent = leftNumber - numberAmount;

        // Clear the input fields
        expense = '';
        amount = '';
    }
});