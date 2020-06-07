function toggleNav(){
  var x = document.getElementById("mainNav");
   if (x.className === "navbar") {
     x.className += " responsive";
   } else {
     x.className = "navbar";
   }

}
