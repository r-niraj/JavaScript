document.getElementById("header").addEventListener("click", abc);

function abc() {
    //document.getElementById("header").classList.add("xyz","efg");
    
    //document.getElementById("header").classList.remove("xyz");
    
    //var a = document.getElementById("header").classList.length;

    //document.getElementById("header").classList.toggle("xyz");

    //var a = document.getElementById("header").classList;

    //var a = document.getElementById("header").classList.item(0);

    var a = document.getElementById("header").classList.contains("first");
    
    console.log(a);
}