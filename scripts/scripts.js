console.log("HELLO");
const buttons = document.querySelectorAll('.dishes_item');
const startBtnMb = document.getElementById("start_button_mobile");
const buttonsMb = document.querySelectorAll('.dishes_item_mobile');
const logo = document.getElementById("main_logo");
const hiddenMenu = document.getElementById("dishes_list_mobile");

document.getElementById("start_button").classList.add('active');
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

buttonsMb.forEach(button => {
  button.addEventListener('click', () => {
    buttonsMb.forEach(btn => {
      btn.style.display = "";
    });
    button.style.display = "none";
    startBtnMb.textContent = button.textContent;
    hiddenMenu.classList.remove("visible");
    hiddenMenu.classList.add("hidden");
    startBtnMb.classList.add('active');
  });
});

logo.addEventListener('click', () => {
  window.location.href  ='index.html';
    });