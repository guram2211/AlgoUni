console.group('სავარჯიშოები: IV კვირა')



// დაწერეთ ფუქნცია, სახელად sayHello, 
// რომელიც დაპრინტავს - "Hello, World".
function sayHello() {
    return 'Hello, World';
}
console.log(sayHello());

// დაწერეთ ფუნქცია, სახელად greet, 
// რომელიც პარამეტრა მიიღებს სახელს და
// დაპრინტავს - "გამარჯობა, [სახელი]"
function greet(name) {
    return console.log(`Hello ${name}`);
}
greet('Guram');

// დაწერეთ ფუნქცია, სახელად sum, 
// რომელიც არგუმენტებად მიიღებს ორ რიცხვს და
// დააბრუნებს მათ ჯამს. შედეგი გამოიტანეთ ტერმინალში.
function sum(a, b) {
    return a + b;
}
console.log(`Sum = ${sum(10, 20)}`);

// დაწერეთ ფუნქცია, სახელად calculateArea, 
// რომელიც არგუმენტად მიიღებს ოთხკუთხედის სიგრესა და სიგანეს და
// დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.
function calculateArea(hight, width) {
    const area = hight * width;
    console.log(`Area = ${area}`);
}
calculateArea(3, 5);

// დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და 
// დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ სამივე - 
// Function Declaration, Function Expression, Arrow Function.
function numDeclaration(a, b) {
    return a > b ? `Large number is: ${a}` : `Large number is: ${b}`;
}
console.log(numDeclaration(2, 3));

const numExpression = function (a, b) {
    return a > b ? `Large number is: ${a}` : `Large number is: ${b}`;
}
console.log(numExpression(2, 3));

const numArrow = (a, b) => a > b ? a : b;
console.log(`Large number is: ${numArrow(2, 3)}`)

// დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, 
// რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".
const textQuant = (quant) => {
    for (let i = 1; i <= quant; i++) {
        console.log('Hello, World');
    }
}
textQuant(2);

// დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, 
// რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში. 
// ფორმულა - (Celsius * 9/5) + 32
const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`Temperature ${fahrenheit.toFixed(2)}°F`);
}
celsiusToFahrenheit(22);

// დაწერეთ ფუნქცია სახელად sumDigits, 
// რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
const sumDigits = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; sum += i, i++) {

    }
    console.log(`Digits sum of ${num} = ${sum}`)
}
sumDigits(2);

// დაწერეთ ფუნქცია სახელად countBs, 
// რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და 
// აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.
const countBs = (text) => {
    let count = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'B') { count++ };
    }
    console.log(`Number of letters "B" in the word ${text} = ${count}`);
}
countBs('BumbleBee');

// დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და 
// დააჯამებს ყველა რიცხვს გარკვეულ შუალედში. 
// მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე.
const sumDigitsBetween = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log(`Sum from (${a} - ${b}) = ${sum}`)
}
sumDigitsBetween(5, 100);

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და 
// დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი 
// (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.
const palindrome = (word) => {
    let lowerCase = word.toLowerCase();
    let reverseWord = '';
    for (let i = lowerCase.length - 1; i >= 0; i--) {
        reverseWord += lowerCase[i]
    }
    reverseWord === lowerCase
        ? console.log(`Yes word "${word}" is palindrome`)
        : console.log(`No word "${word}" is not palindrome`);

}
palindrome('Level')