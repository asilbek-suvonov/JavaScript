let num1 = Number(prompt("Son kiriting"));
let num2 = Number(prompt("Son kiriting"));
let num3 = Number(prompt("Son kiriting"));

if (num1 === num2 && num2 === num3) {
  console.log(`hammasi teng`);
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
  console.log(`tengmas`);
} else {
  console.log(`har xil`);
}
