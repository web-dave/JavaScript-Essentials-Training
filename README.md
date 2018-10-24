# Heros

- create a funtion which generates rows
- write these rows to the `tbody` `innerHTML`
- HINT: `.map()`

```js
let createRow = data => {
  return `<tr>
            <th scope="row">${data.id}</th>
            <td>${data.name}</td>
            <td>${data.description}</td>
            <td>${data.comics.returned}</td>
        </tr>`;
};

let writeTable = rows => {
  table.innerHTML = rows.join("");
};
```
