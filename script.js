const burger = document.querySelector(".menu_burger");
const burgerWrapper = document.querySelector(".burger-wrapper");
const link = document.querySelectorAll(".burger-link");

burger.onclick = () => {
  burger.classList.toggle("active");
  burgerWrapper.classList.toggle("active");
};

for (let i = 0; i < link.length; i += 1) {
  link[i].onclick = () => {
    burger.classList.toggle("active");
    burgerWrapper.classList.toggle("active");
  };
}
