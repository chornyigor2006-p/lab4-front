
const el2 = document.getElementById('element-2');

const el3 = document.querySelector('.element-3');

el2.addEventListener('click', function() {
    this.classList.toggle('clicked-state-1');
});

el3.addEventListener('click', function() {
    this.classList.toggle('clicked-state-2');
});


const imageLinkContainer = document.getElementById('image-link');
const btnAdd = document.getElementById('btn-add');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnRemove = document.getElementById('btn-remove');

let currentWidth = 600;

btnAdd.addEventListener('click', () => {
    if (!document.getElementById('berlin-image')) {
        const newImg = document.createElement('img');
        newImg.id = 'berlin-image';
        newImg.src = 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800';
        newImg.alt = 'Берлін';
        newImg.width = currentWidth;
        imageLinkContainer.appendChild(newImg);
    }
});

btnRemove.addEventListener('click', () => {
    const img = document.getElementById('berlin-image');
    if (img) img.remove();
});

btnIncrease.addEventListener('click', () => {
    const img = document.getElementById('berlin-image');
    if (img) {
        currentWidth += 50;
        img.width = currentWidth;
    }
});

btnDecrease.addEventListener('click', () => {
    const img = document.getElementById('berlin-image');
    if (img) {
        currentWidth = Math.max(50, currentWidth - 50);
        img.width = currentWidth;
    }
});