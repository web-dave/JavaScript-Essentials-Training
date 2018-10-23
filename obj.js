let url = "https://bookmonkey.azurewebsites.net/books";

let user = {
  name: "Horst",
  lastname: "Porst",
  age: 5,
  hobbies: ["JavaScript", "Scratch", "Nasebohren"]
};
console.log(user.name);
for (let hobby of user.hobbies) {
  console.log(hobby);
}
console.log(user.hobbies);
