// Research Links
// 1) https://www.youtube.com/watch?v=SBwoFkRjZvE
//2) https://wesbos.com/javascript-scoping

// const Person = function(name, age) {
//     this.sayHello = () => console.log('hello'); 
//     this.name = name;
//     this.age = age;
// };

// const jeff = new Person ('jeff', 27);

// let a = 17;
// const func = x => {
//     let a = x;
// };
// func(99);
// console.log(a);
// var age = 100;
// if (age > 12) {
//     let dogYears = age * 7
//     console.log(`Your are ${dogYears} dog years old!`);
// }
// console.log(dogYears);

// const counterCreator = () => {
//     let count = 0;
//     return () => {
//         console.log(count);
//         count++;
//     }
// }

// const counter = counterCreator()

// counter()
// counter()
// counter()
// counter()
// counter()

const Player = (name, level) => {
    let health = level * 2;
    const getlevel = () => level;
    const getName = () => name;
    const die = () => {
        //uh oh
    };
    const damage = x => {
        health -=x;
    }
}