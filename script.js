let y = "0";

function calculator(z) {
  z = z.replace(/x/g, "*");
  z = eval(z);
  y = z.toString();
  document.getElementById("bar").innerHTML = y;
}

function displayBar() {
  let x = this.value;

  if (x == "=") {
    calculator(y);
  } else if (y == "0") {
    if (x == "+" || x == "-" || x == "x" || x == "/") {
      y += x;
      document.getElementById("bar").innerHTML = y;
    } else {
      y = x;
      document.getElementById("bar").innerHTML = y;
    }
  } else {
    if (x == "+" || x == "-" || x == "x" || x == "/") {
      if (
        y.slice(-1) == "+" ||
        y.slice(-1) == "-" ||
        y.slice(-1) == "x" ||
        y.slice(-1) == "/"
      ) {
        y = y.slice(0, -1) + x;
        document.getElementById("bar").innerHTML = y;
      } else {
        y += x;
        document.getElementById("bar").innerHTML = y;
      }
    } else {
      y += x;
      document.getElementById("bar").innerHTML = y;
    }
  }
  if (x == "C") {
    y = "0";
    document.getElementById("bar").innerHTML = y;
  }
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", displayBar);
});
