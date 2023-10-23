function changePage() {
    window.open("About.html")

  }
  function aboutCategories() {
    window.open("Categories.html")
}



 document.getElementsByClassName('change').innerText="September 17, 2018 - Tips & Tricks";

 var textChange = document.getElementsByClassName("p-change");
 for (var i=0; i<textChange.length; i++) {
    textChange[i].innerHTML = "September 17, 2018 - Tips & Tricks"
 }

 
 var headingChange = document.getElementsByClassName("h4-change");
for (var j=0; j<headingChange.length; j++){
    headingChange[j].innerHTML = "Finding Love & home in Tbilisi, Georgia"
}
