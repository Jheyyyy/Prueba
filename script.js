var toggle = false
var x = document.getElementById("myDIV");
x.style.display = "none"

function nocambies(e) {
    e.preventDefault()
    console.log('llegó acá')
    if (toggle === false) {
      x.style.display = "block";
    }
    toggle = true
}