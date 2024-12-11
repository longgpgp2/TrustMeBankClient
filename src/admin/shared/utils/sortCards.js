export const sortCards = () => {
  const sortBy = document.getElementById("sort").value;
  const cardList = document.getElementById("card-list");
  const rows = Array.from(cardList.getElementsByTagName("tr"));

  rows.sort((a, b) => {
    const cellA = a
      .getElementsByTagName("td")
      [
        sortBy === "name" ? 0 : sortBy === "cardNumber" ? 1 : 2
      ].textContent.toLowerCase();
    const cellB = b
      .getElementsByTagName("td")
      [
        sortBy === "name" ? 0 : sortBy === "cardNumber" ? 1 : 2
      ].textContent.toLowerCase();

    if (cellA < cellB) return -1;
    if (cellA > cellB) return 1;
    return 0;
  });

  cardList.innerHTML = "";
  rows.forEach((row) => cardList.appendChild(row));
}
