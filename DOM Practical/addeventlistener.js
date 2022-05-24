// onclick event
//document.getElementById("header").onclick = abc;

// onmouseenter event
//document.getElementById("header").onmouseenter = abc;

// with addEventListener

/* document.getElementById("header").addEventListener("mouseenter",abc);
   document.getElementById("header").addEventListener("click", function(){
       document.getElementById("header").style.border = "10px solid red"; 
   }); */

/* document.getElementById("header").addEventListener("click", abc);
   document.getElementById("header").addEventListener("click", function() {
      this.style.border = "10px solid red";
   });  */

// with removeEventListener

//document.getElementById("header").removeEventListener('mouseleave',abc);

//document.getElementById("header").addEventListener("click",xyz);

function abc(){
    document.getElementById("header").style.background = "green";
}

function xyz() {
    document.getElementById("header").removeEventListener('mouseleave',abc);
}
