import "./styles.css";
import { dataFile } from "./data.js";

function solution() {
  // write your code here
  // expected output: string containing number of
  // tickets and total loss
  let duplicateSalesCount = 0;
  let duplicateTicketPrice = 0;

  return (
    `number duplicate ticket sales: ${duplicateSalesCount}` +
    ` total loss: ${duplicateTicketPrice}`
  );
}

document.getElementById("app").innerHTML = solution();
