(function() {
  let xhttp = new XMLHttpRequest();
  let url =
    "https://raw.githubusercontent.com/web-dave/JavaScript-Essentials-Training/arrays-and-objects/heros/heros.json";
  let table = document.querySelector("tbody");
  let results;

  let getData = () => {
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        handleResponse(this.responseText);
      }
    };
  };

  getData();
})();
