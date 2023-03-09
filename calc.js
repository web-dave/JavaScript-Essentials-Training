const btns = document.querySelectorAll("button");
btns.forEach((element) => {
  element.onclick = (e) => console.log(e.target.innerText);
});
