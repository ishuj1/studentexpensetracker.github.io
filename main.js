// Get the form element
const expenseForm = document.querySelector('form');

// Get the table body element
const expenseTableBody = document.querySelector('tbody');

// Handle form submit
expenseForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// Get the input values
	const expenseType = document.getElementById('expense-type').value;
	const expenseAmount = document.getElementById('expense-amount').value;
	const expenseDate = document.getElementById('expense-date').value;

	// Create a new row in the table
	const newRow = expenseTableBody.insertRow();

	// Insert the data into the row
	const expenseTypeCell = newRow.insertCell();
	expenseTypeCell.textContent = expenseType;

	const expenseAmountCell = newRow.insertCell();
	expenseAmountCell.textContent = `$${expenseAmount}`;

	const expenseDateCell = newRow.insertCell();
	expenseDateCell.textContent = expenseDate;
});

// Calculate the total expense amount
function calculateTotal() {
	let total = 0;

	// Loop through each row in the table and add up the expense amounts
	expenseTableBody.querySelectorAll('tr').forEach((row) => {
		const expenseAmount = row.cells[1].textContent.slice(1); // Remove the dollar sign
		total += parseFloat(expenseAmount);
	});

	return total;
}

// Display the total expense amount
function displayTotal() {
	const totalElement = document.getElementById('total');
	totalElement.textContent = `$${calculateTotal().toFixed(2)}`;
}

// Call the displayTotal function initially to display the total
displayTotal();
