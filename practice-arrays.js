const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Filter method with arrow function
// const deposit = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(deposit);
// // const depositFor = [];
// // for (const mov of movements) if (mov > 0) depositFor.push(mov);
// // console.log(depositFor);

// //Reduce method
// // accumulator => snowball it means first iteration of function starting value

// const balance = movements.reduce(function (acc, mov, i, arr) {
//   return acc + mov;
// }, 0);
// //console.log(balance);

/////////////////////////////////////////////////
const juliaDogs = [5, 2, 4, 1, 15, 8, 3];
const calcAvarageHumanAge = function (juliaDogs) {
  const a = juliaDogs.filter((age, i) => {
    age <= 2 ? (age = age * 2) : (age = 16 + age * 4);

    console.log(
      `Dog ${i + 1} age is ${juliaDogs[i]} in human age equal ${age}`
    );
  });

  console.log(a);
};

calcAvarageHumanAge(juliaDogs);
