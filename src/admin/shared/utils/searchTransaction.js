export const searchTransaction = () => {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const transactionList = document.getElementById("transaction-list");
  const rows = transactionList.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const description = cells[1].textContent.toLowerCase();
    const amount = cells[2].textContent.toLowerCase();
    const status = cells[3].textContent.toLowerCase();
    const sender = cells[4].textContent.toLowerCase();
    const receiver = cells[5].textContent.toLowerCase();

    if (
      description.includes(searchQuery) ||
      amount.includes(searchQuery) ||
      status.includes(searchQuery) ||
      sender.includes(searchQuery) ||
      receiver.includes(searchQuery)
    ) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
};
