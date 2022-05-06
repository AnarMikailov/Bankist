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

//Flat method

// const accountMovements = accounts.map(acc => acc.movements);

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// //flatmap method
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

/**************************
//        06.05.2022
***************************/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs);

// const recommendedFood = dogs.map(dog => dog.weight ** 0.75 * 28);
// console.log(recommendedFood);

const recommendedFood = dogs.forEach(
  dog => (dog.recommendedFoods = dog.weight ** 0.75 * 28)
);
const arr = [];
for (let i = 0; i < dogs.length; i++) {
  arr[i] = dogs[i].owners;
}
console.log(arr.flat());

//const a = dogs.forEach((dog, i) => console.log((dog.owners = dogs.flat())));
//console.log(a);

const sarahDogs = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDogs);
if (
  sarahDogs.curFood >= sarahDogs.recommendedFoods * 0.9 &&
  sarahDogs.curFood <= sarahDogs.recommendedFoods * 1.1
)
  console.log(true);
else console.log(false);

const ownersEatTooLittle = [];
const ownersEatTooMuch = [];
const dogsCurFood = dogs.map(dog => {
  if (
    dog.curFood >= dog.recommendedFoods * 0.9 &&
    dog.curFood <= dog.recommendedFoods * 1.1
  )
    console.log(dog.owners);
});
