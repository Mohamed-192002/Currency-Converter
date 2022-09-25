function convert() {
  var x = document.getElementById("in").value;
  if (document.getElementById("from").value == 1) {
    var y = 18.65;
  } else if (document.getElementById("from").value == 2) {
    var y = 14.83;
  } else if (document.getElementById("from").value == 3) {
    var y = 20.05;
  }

  document.getElementById("result").value = x * y + " E.L. ";
}
