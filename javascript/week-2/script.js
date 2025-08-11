console.group('სავარჯიშოები: II კვირა')

// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
const num = 4;
const isEven = num % 2 === 0;

if (isEven) {
    console.log('The number is even')
} else {
    console.log('The number is odd')
};

// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
const number = 0;

if (number === 0) {
    console.log('The number is 0');
} else if (number > 0) {
    console.log('The number is positive');
} else if (number < 0) {
    console.log('The number is negative');
}

// დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.
const firstNumber = 5;
const lastNumber = 2;
const isDivisible = firstNumber % lastNumber === 0;

isDivisible ? console.log('Divisible') : console.log('Not Divisible');

// დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
const text = '     ';
const textCheck = text.trim() === '';

textCheck ? console.log('The string is empty') : console.log('The string is not empty');

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
const textToCheck = 'Checking for a word in a string';
const word = 'Checking';
const wordCheck = textToCheck.includes(word);

wordCheck
    ? console.log(`This string contains the word: ${word}`)
    : console.log(`This string does not contains the word: ${word}`);

// დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
const numberOne = 100;
const numberTwo = 200;

numberOne < numberTwo
    ? console.log(`The smallest of two numbers: ${numberOne}`)
    : console.log(`The smallest of two numbers: ${numberTwo}`);

// დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.
numberOne > numberTwo
    ? console.log(`The biggest of two numbers: ${numberOne}`)
    : console.log(`The biggest of two numbers: ${numberTwo}`);

/* დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება
 თავის ასაკს და დაადგენს არის თუ არა 18 წლის ან უფრო მეტის. 
 თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor". */
const age = Number(prompt('Enter your age:'))

if (age >= 18) {
    console.log('Adult')
} else if (age < 18) {
    console.log('Minor')
} else { console.log('You entered an incorrect value.') }

/* დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს
 ქულას და გამოიტანს შესაბამის შეფასებას. 91-100 -> A; 
 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. 
 გამოიყენეთ ორივე - if/else if/else და switch. */
const score = Number(prompt('Enter your score:'))

if (score >= 0 && score <= 50) {
    var grade = 'F'
} else if (score >= 51 && score <= 60) {
    var grade = 'E'
} else if (score >= 61 && score <= 70) {
    var grade = 'D'
} else if (score >= 71 && score <= 0) {
    var grade = 'C'
} else if (score >= 81 && score <= 90) {
    var grade = 'B'
} else if (score >= 91 && score <= 100) {
    var grade = 'A'
} else { console.log('You entered an incorrect value.') }

switch (grade) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    case "E":
        console.log('E');
        break;
    case "F":
        console.log('Unsatisfactory');
        break;
       default:
}


/* დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F)
 ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. 
 მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!" */
evaluation = prompt('Enter your evaluation:')

switch (evaluation) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Satisfactory');
        break;
    case 'D':
        console.log('Poor');
        break;
    case 'E':
        console.log('Tired');
        break;
    case 'F':
        console.log('Unsatisfactory');
        break;
    default:
        console.log('You entered an incorrect value.')
}

/* დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს 
 თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს
 დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით. */
const month = prompt("Enter month number (1-12):");

switch (month) {
    case '1':
        console.log('There are 31 days in January.');
        break;
    case '2':
        console.log('There are 28 or 29  days in February.');
        break;
    case '3':
        console.log('There are 31 days in March.');
        break;
    case '4':
        console.log('There are 30 days in April.');
        break;
    case '5':
        console.log('There are 31 days in May.');
        break;
    case '6':
        console.log('There are 30 days in June.');
        break;
    case '7':
        console.log('There are 31 days in July.');
        break;
    case '8':
        console.log('There are 31 days in August.');
        break;
    case '9':
        console.log('There are 30 days in September.');
        break;
    case '10':
        console.log('There are 31 days in October.');
        break;
    case '11':
        console.log('There are 30 days in November.');
        break;
    case '12':
        console.log('There are 31 days in December.');
        break;
    default:
        console.log('You entered an incorrect value.');
}
