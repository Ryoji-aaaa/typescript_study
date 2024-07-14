process.stdin.resume();
process.stdin.setEncoding("utf8");

const readline = require("readline");
const lines: Array<number> = [];

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (input: string) => {
  const numbers = input.split(/\s+/).map(Number);
  lines.push(...numbers);
});

reader.on("close", () => {
  console.log(lines);
  calJam(lines);
});

function calJam(lines: number[]) {
  let M = lines[1]!;
  lines.splice(0, 2);
  let currentLength = 0;
  let currentSum = 0;
  let maxLength = 0;
  let maxSum = 0;

  for (let i = 0; i < lines.length; i++) {
    // console.log(lines);
    if (lines[i] <= M) {
      currentLength++;
      currentSum += lines[i];
      if (maxLength < currentLength) {
        maxLength = currentLength;
      }
      if (maxSum < currentSum) {
        maxSum = currentSum;
      }
    }
    //  else {
    //   currentLength = 0;
    //   currentSum = 0;
    // }
  }
  console.log("MaxArray:", maxLength);
  console.log("Max:", maxSum);
}
