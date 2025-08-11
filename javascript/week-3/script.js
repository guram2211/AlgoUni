console.group('სავარჯიშოები: III კვირა')

// დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს
// 0 დან 10-ის ჩათვლით. გამოიყენეთ while და for ციკლები.
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

for (i = 0; i <= 10; i++) {
    console.log(i);
}

// დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს
// 1-დან 20-მდე for loop-ის გამოყენებით.
for (i = 1; i <= 20; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი
// და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.
const num = Number(prompt('Enter number'));
let index = 1;

while (index <= num) {
    if (num === 0 || isNaN(num)) break;
    console.log('Hello')
    index++;
}

// დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 
// 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
let sum = 0;
for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Sum 1-100 = ${sum}`);


// დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 
// 1-დან 100-მდე და დაბეჭდავს შედეგს.
let oddSum = 0
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) continue;
    oddSum += i;
}
console.log(`Odd sum 1-100 = ${oddSum}`);

// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს 
// საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, 
// სანამ ისინი სწორად გამოიცნობენ, while loop-ის და do while-ის გამოყენებით.
let secretNumber;
do {
    secretNumber = Number(prompt('Guess the secret number from 1 to 10:'));

} while (secretNumber !== 7);
console.log('You guessed the secret number is 7')

// გამოიყენეთ do...while ციკლი 10-დან 1-მდე დასათვლელად.
i = 0;
do {
    i++
    console.log(i)
} while (i !== 10)

// გამოიყენეთ for loop 1-დან 30-მდე 3-ის ჯერადების დასაბეჭდად.
for (i = 0; i <= 30; i++) {
    if (i % 3 !== 0) continue;
    console.log(i)
}

// გამოიყენეთ for loop 4-ის გამრავლების ცხრილის დასაბეჭდად (4 × 1-დან 4 × 10-მდე).

for (i = 1; i <= 10; i++) {
    console.log(`4 X ${i} = ${4 * i}`)
}

// გამოიყენეთ while ლუპი, რათა დათვალოთ სიმბოლოების 
// რაოდენობა სტრიქონში "AlgoUni" და დაბეჭდოთ შედეგი.
const word = 'AlgoUni'
let count = 0;

while (count < word.length) {
    count++
}
console.log(`World Count = ${count}`)

// გამოიყენეთ do...while ციკლი „დიახ“-ის დასაბეჭდად, თუ რიცხვი 5-ზე ნაკლებია და „არა“, 
// თუ ის აღწევს ან აღემატება 5-ს. რიცხვების შუალედად აიღეთ -10 და 10.
i = -10;

do {
    if (i < 5) {
        console.log(`${i} Yes`)
    } else if (i >= 5) {
        console.log(`${i} No`)
    }
    i++
} while (i <= 10)


// გამოიყენეთ for loop 20-დან 10-მდე რიცხვების დასაბეჭდად.

for (i = 20; i >= 10; i--) {
    console.log(i)
}

// Write a loop that makes seven calls to console.log 
// to output the following triangle:
index = 0;
let triangle = ''

while (index < 7) {
    index++
    triangle += '#'
    console.log(triangle)
}

// Write a program that uses console.log to print all the numbers from 1 to 100, 
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" 
// for numbers that are divisible by both 3 and 5 
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of the grid 
// there is either a space or a "#" character.
//  The characters should form a chessboard.
let columns = 8;
let rows = 8;

for (let r = 1; r <= rows; r++) {
    let line = '';
    for (let c = 1; c <= columns; c++) {
        if ((r + c) % 2 === 0) {
            line += ' ';
        } else {
            line += '#';
        }
    }
    console.log(line);
}
