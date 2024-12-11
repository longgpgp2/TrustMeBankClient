export const searchCard = () => {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const cardList = document.getElementById('card-list');
    const rows = cardList.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const name = cells[0].textContent.toLowerCase();
        const cardNumber = cells[1].textContent.toLowerCase();
        const cardType = cells[3].textContent.toLowerCase();

        if (name.includes(searchQuery) || cardNumber.includes(searchQuery) || cardType.includes(searchQuery)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

