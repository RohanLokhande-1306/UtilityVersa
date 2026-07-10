
const themeButton = document.querySelector(".theme");
   const savedTheme = localStorage.getItem("theme");

      if (savedTheme === "dark") {
         document.body.classList.add("dark-mode");
      }
      themeButton.addEventListener("click", function () {
         document.body.classList.toggle("dark-mode");
         if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
         } else {
            localStorage.setItem("theme", "light");
         }

});
//************************************Calculator888888888*/
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){

    button.addEventListener("click", function(){
      const value = button.textContent;
      display.value += value;
    });

});