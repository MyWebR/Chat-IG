document.addEventListener("DOMContentLoaded", function() {
     var header = document.querySelector("header");
   
     function toggleBorder() {
       if (window.scrollY > 0) {
         header.style.borderBottom = "1px solid #ccc"; // or any other color you want
       } else {
         header.style.borderBottom = "none";
       }
     }
   
     // initial check
     toggleBorder();
   
     // check on scroll
     window.addEventListener("scroll", toggleBorder);
   });
   