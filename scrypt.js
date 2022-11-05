function openlink1(){
    window.open("https://www.spotify.com/in-en/download/windows/","_self");
}

var acc = document.getElementsByClassName("layout");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    console.log("hello")
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
