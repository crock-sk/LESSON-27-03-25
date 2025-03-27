const btn = document.querySelector(".btn");

btn.addEventListener("click", () => console.log("Hello World!"));

// const obj = {
//   name: "Clara",
//   major: "JS",
//   year: 2025,
//   sumary() {
//     console.log(
//       `I am ${this.name}, studying ${this.major} in year ${this.year}`
//     );
//   },
// };

const obj = {
  name: "Clara",
  major: "JS",
  year: 2025,
  sumary: () => {
    console.log(
      `I am ${this.name}, studying ${this.major} in year ${this.year}`
    );
  },
};

obj.sumary();

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success!");
  }, 3000);
});

console.log(myPromise);

myPromise.then((result) => {
  console.log("result", result);
});

console.log("after then");

const fetchData = fetch("https://www.omdbapi.com/?apiKey=94e1e8f6&s=spiderman");
console.log("fetchData", fetchData);

fetchData.then((response) =>
  response.json().then((result) => console.log(result))
);
