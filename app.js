document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll(
    ".num, .del, .reset, .equal, .operation, .decimal"
  );

  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (
        button.classList.contains("num") ||
        button.classList.contains("operation") ||
        button.classList.contains("decimal")
      ) {
        currentInput += buttonText;
      } else if (button.classList.contains("del")) {
        currentInput = currentInput.slice(0, -1);
      } else if (button.classList.contains("reset")) {
        currentInput = "";
      } else if (button.classList.contains("equal")) {
        try {
          currentInput = eval(currentInput);
        } catch (error) {
          currentInput = "Error";
        }
      }

      screen.value = currentInput;
    });
  });
});
