(function() {
  let xhttp = new XMLHttpRequest();
  let url =
    "https://raw.githubusercontent.com/web-dave/JavaScript-Essentials-Training/arrays-and-objects/heroes.json";
  let createRow = data => {
    return `<tr>
            <th scope="row">${data.id}</th>
            <td>${data.name}</td>
            <td>${data.description}</td>
            <td>${data.returned}</td>
        </tr>`;
  };
  let getData = () => {
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = e => {
      console.log(e);
    };
  };
  let handleResponse = () => {};
  getData();
})();

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.querySelector("pre").innerHTML = this.responseText;
//     }
//   };

//   xhttp.send();
// }
