let DisPlay = document.getElementById("num");
let buttons = document.querySelectorAll("button");

let buArr = Array.from(buttons);
const str = "";

buArr.forEach(function (btn) {
  //   console.log(btn);
  btn.addEventListener("click", function (event) {
    str += event.target.innerHTML;

    DisPlay.value = str;

    console.log(event.target.innerHTML);
  });
});

// console.log(buttons);
