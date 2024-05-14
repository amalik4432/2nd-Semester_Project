document.addEventListener('DOMContentLoaded', () => {
  let total = 0.0;
  const expenseItems = document.querySelector('#expense-items');
  const addItemButton = document.querySelector('#add-item');
  const clearAllButton = document.querySelector('#clear-all');

  addItemButton.addEventListener('click', () => {
    const itemName = document.getElementById('item-name').value.trim();
    const itemAmountInput = document.getElementById('item-amount');
    const itemAmount = parseFloat(itemAmountInput.value);

    if (itemName && !isNaN(itemAmount) && itemAmount > 0) {
      const listItem = document.createElement('li');
      listItem.textContent = `${itemName} - $${itemAmount.toFixed(2)}`;
      expenseItems.appendChild(listItem);

      total += itemAmount;
      document.querySelector('#total').textContent = total.toFixed(2);

      document.querySelector('#item-name').value = '';
      itemAmountInput.value = '';
    } else {
      alert('Please enter a valid item name and a positive amount.');
    }
  });

  clearAllButton.addEventListener('click', () => {
    expenseItems.innerHTML = '';
    total = 0.0;
    document.querySelector('#total').textContent = total.toFixed(2);
  });
});
