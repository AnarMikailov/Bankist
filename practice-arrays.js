'use strict';

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // //Filter method with arrow function
// // // const deposit = movements.filter(mov => mov > 0);
// // // const withdrawals = movements.filter(mov => mov < 0);
// // // console.log(deposit);
// // // // const depositFor = [];
// // // // for (const mov of movements) if (mov > 0) depositFor.push(mov);
// // // // console.log(depositFor);

// // // //Reduce method
// // // // accumulator => snowball it means first iteration of function starting value

// // // const balance = movements.reduce(function (acc, mov, i, arr) {
// // //   return acc + mov;
// // // }, 0);
// // // //console.log(balance);

// // /////////////////////////////////////////////////
// // const juliaDogs = [5, 2, 4, 1, 15, 8, 3];
// // const kateDogs = [6, 10, 16, 5, 6, 1, 4];
// // let dogsAgeToHumanAge = [];
// // const calcAvarageHumanAge = function (dogs) {
// //   dogs.forEach((age, i) => {
// //     age <= 2 ? (age = age * 2) : (age = 16 + age * 4);

// //     console.log(`Dog ${i + 1} age is ${dogs[i]} in human age equal ${age}`);
// //     dogsAgeToHumanAge[i] = age;
// //   });

// //   const adultArr = dogsAgeToHumanAge.filter(adult => adult > 18);

// //   const avgAges = adultArr.reduce((acc, adultArr) => acc + adultArr, 0);

// //   console.log(`-----------------------------------`);

// //   console.log(`Avarage of dogs age is ${avgAges / adultArr.length}`);
// // };

// // calcAvarageHumanAge(juliaDogs);
// // calcAvarageHumanAge(kateDogs);
// const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // This checks EQUALITY
// console.log(movements.includes(-130));

// //This checks condition :SOME
// const anyDeposit = movement.some(acc => acc > 500);
// console.log(anyDeposit);

// //Every: This works if all elemets can passing condition
// console.log(movement.every(mov => mov > 0));
