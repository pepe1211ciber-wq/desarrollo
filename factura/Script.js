document.addEventListener("DOMContentLoaded", function() {
  const invoiceForm = document.getElementById("invoice-form");
  const itemNameInput = document.getElementById("item-name");
  const quantityInput = document.getElementById("quantity");
  const subtotalInput = document.getElementById("subtotal");
  const invoiceItems = document.getElementById("invoice-items");
  const clearButton = document.getElementById("clear-invoice");

  invoiceForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const itemName = itemNameInput.value;
    const quantity = quantityInput.value;
    const subtotal = subtotalInput.value;

    if (itemName.trim() === '' || quantity.trim() === '' || subtotal.trim() === '') {
      alert("Por favor, completa todos los campos.");
      return;
    }

    addItemToInvoice(itemName, quantity, subtotal);


    itemNameInput.value = '';
    quantityInput.value = '';
    subtotalInput.value = '';
  });

  clearButton.addEventListener("click", function() {
   
    while (invoiceItems.firstChild) {
      invoiceItems.removeChild(invoiceItems.firstChild);
    }
  });

  function addItemToInvoice(itemName, quantity, subtotal) {
    const row = document.createElement("tr");
    const currentDateTime = new Date().toLocaleString();
    row.innerHTML = `
      <td class="invoice-td">${itemName}</td>
      <td class="invoice-td">${quantity}</td>
      <td class="invoice-td">${subtotal}</td>
      <td class="invoice-td">${currentDateTime}</td> 
    `;
    invoiceItems.appendChild(row);
  }
});
