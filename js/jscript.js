function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
     {
        if (this.readyState == 1 && this.status == 200) {
            document.getElementById("demo").innerHTML=  "<img src='img/giphy.gif'>";
          }
        else if (this.readyState == 2 && this.status == 200) {
            document.getElementById("demo").innerHTML =  "<img src='img/loading1.gif'>";
          }
        else if (this.readyState == 3 && this.status == 200) {
            document.getElementById("demo").innerHTML = "<img src='img/loading.gif'>";
          }
        else if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
        document.getElementById("demo").style.paddingLeft= '30%';
          }
        else {
            document.getElementById("demo").innerHTML = "Error";
        }
    };
    xhttp.open("GET", "js/jshtml.html");
    xhttp.send();
  }