const stateDropdown = document.getElementById('stateDropdown');
const stateMenu = document.getElementById('stateMenu');
const stateLabel = document.getElementById('stateLabel');
const stateItems = stateMenu.querySelectorAll('.dropdown-item');

stateDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    stateMenu.classList.toggle('show');
    stateDropdown.classList.toggle('active');
    typeMenu.classList.remove('show');
    typeDropdown.classList.remove('active');
});

stateItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        stateItems.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        stateLabel.textContent = item.textContent;
        stateMenu.classList.remove('show');
        stateDropdown.classList.remove('active');
    });
});

// Type dropdown
const typeDropdown = document.getElementById('typeDropdown');
const typeMenu = document.getElementById('typeMenu');
const typeLabel = document.getElementById('typeLabel');
const typeItems = typeMenu.querySelectorAll('.dropdown-item');

typeDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    typeMenu.classList.toggle('show');
    typeDropdown.classList.toggle('active');
    stateMenu.classList.remove('show');
    stateDropdown.classList.remove('active');
});

typeItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        typeItems.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        typeLabel.textContent = item.textContent;
        typeMenu.classList.remove('show');
        typeDropdown.classList.remove('active');
    });
});

document.addEventListener('click', () => {
    stateMenu.classList.remove('show');
    typeMenu.classList.remove('show');
    stateDropdown.classList.remove('active');
    typeDropdown.classList.remove('active');
});