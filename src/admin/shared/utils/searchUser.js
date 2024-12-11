export const searchUser = () => {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const userList = document.getElementById('user-list');
    const rows = userList.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const name = cells[0].textContent.toLowerCase();
        const email = cells[1].textContent.toLowerCase();

        if (name.includes(searchQuery) || email.includes(searchQuery)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}