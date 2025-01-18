console.log("HELLO");
const buttons = document.querySelectorAll('.dishes_item');
document.getElementById("start_button").classList.add('active');
const startBtnMb = document.getElementById("start_button_mobile");
const logo = document.getElementById("main_logo");
const hiddenMenu = document.getElementById("dishes_list_mobile");

startBtnMb.classList.add('active');

startBtnMb.addEventListener('click', () => {
  if (hiddenMenu.classList.contains('hidden')) {
    hiddenMenu.classList.remove("hidden");
    hiddenMenu.classList.add("visible");
  }
  else
  {
    hiddenMenu.classList.remove("visible");
    hiddenMenu.classList.add("hidden");
  }
});

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