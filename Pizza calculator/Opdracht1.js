var smallAmount = parseInt(prompt("Hoeveel small pizza's wilt u?"))
var mediumAmount = parseInt(prompt("Hoeveel medium pizza's wilt u?"))
var largeAmount = parseInt(prompt("Hoeveel large pizza's wilt u?"))

const SMALLPRICE = 4;
const MEDIUMPRICE = 7;
const LARGEPRICE = 10;

document.write ("small pizza's" + " "+smallAmount+" " + "met een prijs van"+ smallAmount*SMALLPRICE+br)
document.write ("medium pizza's" + " "+mediumAmount+" " + "met een prijs van"+ mediumAmount*MEDIUMPRICE+br)
document.write ("large pizza's" +" "+largeAmount+" " + "met een prijs van"+ largeAmount*LARGEPRICE+br)