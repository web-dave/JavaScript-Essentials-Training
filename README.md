# Styling

- add the styling
- remeber where to put your styling (externel)

```css
#calc-contain {
  position: relative;
  width: 400px;
  border: 2px solid black;
  border-radius: 12px;
  margin: 0px auto;
  padding: 20px 20px 100px 20px;
}
#agh {
  position: relative;
  float: right;
  margin-top: 15px;
}
#agh p {
  font-size: 20px;
  font-weight: 900;
}
input[type="button"],
button {
  background: lightGray;
  width: 20%;
  font-size: 20px;
  font-weight: 900;
  border-radius: 7px;
  margin-left: 13px;
  margin-top: 10px;
}
input[type="button"]:active,
button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
input[type="button"]:hover,
button:hover {
  background-color: #003300;
  color: white;
}

input[type="text"] {
  position: relative;
  display: block;
  width: 90%;
  margin: 5px auto;
  font-size: 20px;
  padding: 10px;
  box-shadow: 4px 0px 12px black inset;
}
```
