# Element-onclick

- add onclick handler to each button\*

```js
for (let elem of document.querySelectorAll("button")) {
  elem.onclick = e => console.log(e.target.innerText);
}
```
