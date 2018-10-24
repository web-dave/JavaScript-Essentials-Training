(function() {
  let xhr = new XMLHttpRequest();
  let url =
    "https://raw.githubusercontent.com/web-dave/JavaScript-Essentials-Training/arrays-and-objects/heros/heros.json";
  let table = document.querySelector(".heros tbody");
  let allHeros;
  let results;

  let getData = () => {
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
      // handle Response
      // readyState	Holds the status of the XMLHttpRequest.
      // 0: request not initialized
      // 1: server connection established
      // 2: request received
      // 3: processing request
      // 4: request finished and response is ready
      if (this.readyState == 4 && this.status == 200) {
        handleResponse(this.responseText);
      }
    };
  };

  let handleResponse = text => {
    results = JSON.parse(text).data.results; //Array of heros
    allHeros = JSON.parse(text).data.results; //Array of heros

    writeTable(results);
  };

  let writeTable = herosList => {
    let rows = herosList.map(hero => rowTemplate(hero)); //Array of rows
    table.innerHTML = rows.join("");
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
    writeTable(results);
  };

  let registerSortBtn = () => {
    document.querySelectorAll(".searchField").forEach(input => {
      input.oninput = e => filterList(e.target.id, e.target.value);
    });

    document.querySelectorAll(".sortBtn").forEach(btn => {
      btn.onclick = e => sortList(e.target.innerText);
    });
  };

  let filterList = (id, searchstr) => {
    let field = id.replace("hero_", "");

    results = allHeros.filter(hero => {
      if (field === "returned") {
        return hero.comics.returned <= searchstr;
      } else {
        return (
          hero[field]
            .toString()
            .toLowerCase()
            .indexOf(searchstr.toLowerCase()) != -1
        );
      }
    });
    writeTable(results);
  };

  getData();
  registerSortBtn();

  let rowTemplate = hero => {
    return `<tr>
  <td>${hero.id}</td>
  <td>${hero.name}</td>
  <td>${hero.description}</td>
  <td>${hero.comics.returned}</td>
</tr>`;
  };
})();
