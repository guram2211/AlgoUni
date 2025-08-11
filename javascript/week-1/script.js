console.group('სავარჯიშოები: I კვირა')

// დაწერეთ პროგრამა რომელიც კონსოლში გამოიტანს "Hello World" -ს.
console.log('Hello World');

// შექმენით ცვლადი და მიანიჭეთ მას რიცხვი. დაბეჭდეთ ცვლადის მნიშვნელობა.
let a = 3, b = 2;
console.log(`Variable = ${a}`);

// დაწერეთ პროგრამა ორი რიცხვის შესაკრებად და შედეგის გამოსატანად.
const sum = `Sum = ${a + b}`;
console.log(sum);

// დაწერეთ პროგრამა რომელიც გამოაკლებს ორ რიცხვს ერთმანეთს და აჩვენებს შედეგს.
const difference = `Difference = ${a - b}`;
console.log(difference);

// დაწერეთ პროგრამა ორი რიცხვის გასამრავლებლად და შედეგის გამოსატანად.
const product = `Product = ${a * b}`;
console.log(product);

// დაწერეთ პროგრამა ორი რიცხვის გასაყოფად და შედეგის გამოსატანად.
const quotient = `Quotient = ${(a / b).toFixed(2)}`;
console.log(quotient);

// დაწერეთ პროგრამა ორი რიცხვის გაყოფის ნაშთის გამოსათვლელად.
const remainder = `Remainder = ${a % b}`;
console.log(remainder);

// შექმენით ცვლადი და მიანიჭეთ მას სტრიქონი. ამობეჭდეთ სტრიქონის სიგრძე.
let text = 'Text Langs';
const textLangs = `${text} = ${text.length}`;
console.log(textLangs);

// დაწერეთ პროგრამა ორი სტრიქონის შესაერთებლად და შედეგის ჩვენების მიზნით.
const firstText = 'Text';
const lastText = 'Concatenation';
const textConcatenation = firstText + ' ' + lastText;
console.log(textConcatenation);

// დაწერეთ პროგრამა სტრიქონის დიდ ასოებზე გადასაყვანად.
text = 'text written in upper case';
const upperCase = text.toUpperCase();
console.log(upperCase);

// დაწერეთ პროგრამა სტრიქონის მცირე ასოზე გადასაყვანად.სავარჯიშოები:
text = 'TEXT WRITTEN IN LOWER CASE';
const lowerCase = text.toLowerCase();
console.log(lowerCase);
