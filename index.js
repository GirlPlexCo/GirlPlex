window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() { // For Safari
  document.documentElement.scrollTop = 1000; // For Chrome, Firefox, IE and Opera
}

mybutton1 = document.getElementById("myBtn1");

// When the user clicks on the button, scroll to the top of the document
function topFunction1() { // For Safari
  document.documentElement.scrollTop = 3300; // For Chrome, Firefox, IE and Opera
}

mybutton2 = document.getElementById("myBtn2");

// When the user clicks on the button, scroll to the top of the document
function topFunction2() { // For Safari
  document.documentElement.scrollTop = 2700; // For Chrome, Firefox, IE and Opera
}

mybutton3 = document.getElementById("myBtn3");

// When the user clicks on the button, scroll to the top of the document
function topFunction3() { // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton4 = document.getElementById("myBtn4");

// When the user clicks on the button, scroll to the top of the document
function topFunction4() { // For Safari
  document.documentElement.scrollTop = 2300; // For Chrome, Firefox, IE and Opera
}
