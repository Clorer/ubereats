console.log("HELLO");
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = 'restaurant.html';
    });
});
    
 