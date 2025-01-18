console.log("HELLO");
const buttons = document.querySelectorAll('.dishes_item'); // Находим все кнопки с классом "my-button"
document.getElementById("start_button").classList.add('active');
const logo = document.getElementById("main_logo");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn =>{btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});

logo.addEventListener('click', () => {
  window.location.href  ='index.html';
    });