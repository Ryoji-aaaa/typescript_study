const button = document.getElementById("first")!;
const button2 = document.querySelector("#second")!;
button.addEventListener('click', () => {
  message("Clicked!!")
});
button2.addEventListener('click', () => {
  message("2nd Button Clicked!!")
});

function message(someword: string) {
  console.log("analytics.ts : " + someword);
}
// message("");
// message("sending ...")
