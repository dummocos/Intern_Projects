function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
  
    if (celsius != "") {
      fahrenheit = (celsius * 1.8) + 32;
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else if (fahrenheit != "") {
      celsius = (fahrenheit - 32) / 1.8;
      document.getElementById("celsius").value = celsius.toFixed(2);
    }
  }
  