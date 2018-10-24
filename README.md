# Heros

- write a funtion to send a `XMLHttpRequest`
- and call this function
- check the result with a `console.log`

```js
let getData = () => {
  xhttp.open("GET", url, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // handle Response
      // readyState	Holds the status of the XMLHttpRequest.
      // 0: request not initialized
      // 1: server connection established
      // 2: request received
      // 3: processing request
      // 4: request finished and response is ready
    }
  };
};

getData();
```
