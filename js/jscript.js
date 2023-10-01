function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
     {
        if (this.readyState == 1 && this.status == 200) {
            document.getElementById("demo").innerHTML =  "Server connection established";
          }
        else if (this.readyState == 2 && this.status == 200) {
            document.getElementById("demo").innerHTML =  "Request Received";
          }
        else if (this.readyState == 3 && this.status == 200) {
            document.getElementById("demo").innerHTML = " Processing Request";
          }
        else if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
          }
        else {
            document.getElementById("demo").innerHTML = "Error";
        }
    };
    xhttp.open("GET", "js/jshtml.html");
    xhttp.send();
  }