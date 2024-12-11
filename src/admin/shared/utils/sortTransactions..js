export const sortTransactions = () => {
  const sortBy = document.getElementById("sort").value;
  const transactionList = document.getElementById("transaction-list");
  const rows = Array.from(transactionList.getElementsByTagName("tr"));

  rows.sort((a, b) => {
    const cellA = a
      .getElementsByTagName("td")
      [
        sortBy === "date" ? 0 : sortBy === "amount" ? 2 : 3
      ].textContent.toLowerCase();
    const cellB = b
      .getElementsByTagName("td")
      [
        sortBy === "date" ? 0 : sortBy === "amount" ? 2 : 3
      ].textContent.toLowerCase();

    if (cellA < cellB) return -1;
    if (cellA > cellB) return 1;
    return 0;
  });

  transactionList.innerHTML = "";
  rows.forEach((row) => transactionList.appendChild(row));
};
