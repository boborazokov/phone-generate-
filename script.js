// var res = document.getElementById("res");
// const nuberPhones = new Set();

// var amountNume = prompt("Enter amount numbers : ");

// function generateNum() {
//   var stringNum = "+99891";
//   for (let i = 0; i < 7; i++) {
//     var randomNum = Math.floor(Math.random() * 10);
//     stringNum += randomNum;
//   }
//   return stringNum;
// }

// while (nuberPhones.size < amountNume) {
//   nuberPhones.add(generateNum());
// }

// function display() {
//   res.innerHTML += nuberPhones;
// }
// console.log(nuberPhones505);

var amount = document.getElementById("number");
var res = document.getElementById("res");
var gradients = ["conic-gradient", "radial-gradient", "linear-gradient"];

function randomNumber() {
  var arr = [];
  for (let i = 0; i < 6; i++) {
    var numberRandom = Math.floor(Math.random() * 10);
    arr.push(numberRandom);
  }
  return arr.join("");
}

function submitForm(e) {
  e.preventDefault();
  res.innerHTML = "";
  for (var i = 0; i < amount.value; i++) {
    var gra = gradientRandom();
    var color1 = randomNumber();
    var color2 = randomNumber();
    res.innerHTML += `
      <div>
        <div class="blok" style="background-image: ${gra}(#${color1},#${color2});"></div>
        <p class="text">background-image: ${gra}(#${color1},#${color2})</p>
        </div>
        `;
  }
}

function gradientRandom() {
  var randomGradientIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomGradientIndex];
}
