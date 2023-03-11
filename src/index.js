import { dataFile } from "./data.js";

function solution() {
  const data = dataFile.split("\n");
  let tickets = [];
  let seatNumber = "";
  let duplicateSalesCount = 0;
  let duplicateTicketPrice = 0;
  let price = 0;
  let seatSearchTerm = "SEAT:";
  let priceSearchTerm = "PRICE";

  data.forEach((line) => {
    if (line.includes(priceSearchTerm)) {
       price = parseFloat(line.replace(priceSearchTerm, "").trim());
    }
    if (line.includes(seatSearchTerm)) {
      seatNumber = line.replace(seatSearchTerm, "").trim();
      if (!tickets.includes(seatNumber)) {
        tickets.push(seatNumber);
      }
      else{
        duplicateSalesCount++;
        duplicateTicketPrice += price;
      }
    }
  });

  return (
    `number duplicate ticket sales: ${duplicateSalesCount}` +
    ` total loss: ${duplicateTicketPrice.toFixed(2)}`
  );
}

document.getElementById("app").innerHTML = solution();
