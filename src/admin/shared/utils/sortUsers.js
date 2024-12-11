export const sortUsers = () => {
  const sortBy = document.getElementById("sort").value;
  const userList = document.getElementById("user-list");
  const rows = Array.from(userList.getElementsByTagName("tr"));

  rows.sort((a, b) => {
    const cellA = a
      .getElementsByTagName("td")
      [
        sortBy === "name" ? 0 : sortBy === "email" ? 1 : 2
      ].textContent.toLowerCase();
    const cellB = b
      .getElementsByTagName("td")
      [
        sortBy === "name" ? 0 : sortBy === "email" ? 1 : 2
      ].textContent.toLowerCase();

    if (cellA < cellB) return -1;
    if (cellA > cellB) return 1;
    return 0;
  });

  userList.innerHTML = "";
  rows.forEach((row) => userList.appendChild(row));
};
