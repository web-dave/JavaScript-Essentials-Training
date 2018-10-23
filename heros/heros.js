(function() {
  let xhttp = new XMLHttpRequest();
  let url =
    "https://raw.githubusercontent.com/web-dave/JavaScript-Essentials-Training/arrays-and-objects/heros/heros.json";
  let table = document.querySelector("tbody");
  let results;

  let createRow = data => {
    return `<tr>
            <th scope="row">${data.id}</th>
            <td>${data.name}</td>
            <td>${data.description}</td>
            <td>${data.comics.returned}</td>
        </tr>`;
  };

  let registerSort = () => {
    let sortBtns = document.querySelectorAll(".sortBtn");
    sortBtns.forEach(btn => {
      btn.onclick = e => sortList(e.target.innerText);
    });
  };

  let sortList = col => {
    console.log(col);
    let colName = col.toLowerCase();
    switch (col) {
      case "ID":
        results.sort((a, b) => a[colName] - b[colName]);
        break;
      case "RETURNED":
        results.sort((a, b) => a.comics.returned - b.comics.returned);
        break;
      case "NAME":
        results.sort(
          (a, b) =>
            a[colName] > b[colName] ? 1 : b[colName] > a[colName] ? -1 : 0
        );
        break;
      case "DESCRIPTION":
        results.sort(
          (a, b) =>
            a[colName] > b[colName] ? 1 : b[colName] > a[colName] ? -1 : 0
        );
        break;
    }
    writeTable(results.map(item => createRow(item)));
  };

  let getData = () => {
    registerSort();
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        handleResponse(this.responseText);
      }
    };
  };

  let handleResponse = text => {
    results = JSON.parse(text).data.results;
    writeTable(results.map(item => createRow(item)));
  };

  let writeTable = rows => {
    table.innerHTML = rows.join("");
  };

  getData();
})();
