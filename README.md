# Improve the onclick logic

This is a JavaScript Workshop.

So grap a browser and a Text Editor and let's get started.

- transfere the value to a funtion
- decide in that function numbers are written to the display
- clear if the value is `c`

```js
function handleInput(value) {
  if (!isNaN(value)) {
    document.querySelector("[name=display]").value += value;
  } else {
    // no number
  }
}

for (let elem of document.querySelectorAll("button")) {
  elem.onclick = e => handleInput(e.target.innerText);
}
```

```js
if (value === "c") {
  document.querySelector("[name=display]").value = "";
}
```
