
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

       if (value === "C") {
            display.value = "";
         }
         else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
         }
         else if (value === "=")
            {
               try 
            {
               let expression = display.value;
               expression = expression.replace(/×/g, "*");
               expression = expression.replace(/÷/g, "/");
               display.value = eval(expression);
            }
         catch 
           {
               display.value = "Syntax Error";
           }
            }
          else{
            display.value += value;
         }

    });

});