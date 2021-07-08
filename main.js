let cars = ['Ford', 'Chevy', 'Toyota', 'Tesla']
console.log(cars.length);

let moreCars = ['Subaru', 'Hyundai', 'BMW', 'Honda']

//combine two arrays
let totalCars = cars.concat(moreCars)
console.log(totalCars);

//print index of each of these cars in the array
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

//convert array totalCars into string stringOfCars
let stringOfCars = totalCars.join();
console.log(stringOfCars);

//split string of cars into array called carsFromString
let carsFromString = stringOfCars.split(',')
console.log(carsFromString);

//Reverse order of totalCars
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//Sort carsInReverse into alphabetical order
carsInReverse.sort();
console.log(carsInReverse);
//---------------------------------------------------------------------
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptiles = pets.slice(4,6);
console.log(pets);
console.log(reptiles);

let removedReptiles = pets.splice(4,2,'hamster');
console.log('Removed Reptiles:', removedReptiles);
console.log('Pets:', pets);

let removedPet = pets.pop();
console.log('Pets:', pets);
console.log('Removed Pet:', removedPet);

pets.push(removedPet);
console.log('Pets', pets);

pets.shift();
console.log('Pets', pets);

pets.unshift('turtle');
console.log('Pets', pets);
//----------------------------------------------------------------------
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
    arr[index] = num + 2;
}

numbers.forEach(addTwo);

console.log(numbers);