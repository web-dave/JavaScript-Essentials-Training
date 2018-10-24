# Heros

- write a funtion to send a `XMLHttpRequest`

* and call this function

```js
let getData = () => {
  xhttp.open("GET", url, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // handle Response
    }
  };
};

getData();
```
